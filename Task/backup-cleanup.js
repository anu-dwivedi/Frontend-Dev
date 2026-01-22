const fs = require('fs').promises;
const path = require('path');
const { copyFile } = require('fs').promises;

const args = process.argv.slice(2);
const sourceDir = args[0] || 'uploads';
const backupDir = path.join(sourceDir, 'backup-2026-01-22');
const logFile = 'backup.log';

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000; // 7 days in ms

// Log helper
async function log(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;
  await fs.appendFile(logFile, logEntry);
  console.log(logEntry.trim());
}

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    await log(`Created directory: ${dirPath}`);
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function copyWithTimestamp(srcDir, fileName) {
  const timestamp = Date.now();
  const ext = path.extname(fileName);
  const name = path.basename(fileName, ext);
  const backupName = `${name}-${timestamp}${ext}`;
  const destPath = path.join(backupDir, backupName);
  
  await copyFile(path.join(srcDir, fileName), destPath);
  await log(`Backed up: ${fileName} -> ${backupName}`);
}

async function deleteOldFile(filePath) {
  await fs.unlink(filePath);
  await log(`Deleted old file: ${path.basename(filePath)}`);
}

async function getFilesRecursively(dir) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });
    const results = [];
    
    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        results.push(...await getFilesRecursively(fullPath));
      } else {
        const stats = await fs.stat(fullPath);
        results.push({ path: fullPath, stats, name: file.name });
      }
    }
    return results;
  } catch (err) {
    if (err.code === 'ENOENT') {
      await log(`Directory not found, skipping: ${dir}`);
      return [];
    }
    throw err;
  }
}

async function main() {
  try {
    await log(`=== Backup & Cleanup Started ===`);
    await log(`Source: ${sourceDir}`);
    
    // 1. Ensure backup directory exists
    await ensureDir(backupDir);
    
    // 2. Get all files recursively
    const files = await getFilesRecursively(sourceDir);
    await log(`Found ${files.length} files to process`);
    
    let backedUp = 0;
    let deleted = 0;
    
    // 3. Process each file
    for (const { path: filePath, stats, name } of files) {
      const age = Date.now() - stats.mtime.getTime();
      
      // Backup important files (non-temp, images, docs)
      const shouldBackup = !name.match(/\.(tmp|cache|log|bak)$/i) &&
                          (name.match(/\.(jpg|png|pdf|docx|txt)$/i));
      
      if (shouldBackup) {
        await copyWithTimestamp(sourceDir, name);
        backedUp++;
      }
      
      // Delete files older than 7 days
      if (age > SEVEN_DAYS) {
        await deleteOldFile(filePath);
        deleted++;
      }
    }
    
    await log(`=== Complete ===`);
    await log(`Backed up: ${backedUp} files`);
    await log(`Deleted: ${deleted} old files`);
    
  } catch (err) {
    await log(`ERROR: ${err.message}`);
    console.error('Failed:', err.message);
    process.exit(1);
  }
}

main();
