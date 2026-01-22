const fs = require('fs');
const path = require('path');

const sourceFile = process.argv[2] || 'important.txt';
const outputDir = 'backups';

function backupFile() {
  // 1. Create timestamp
  const timestamp = Date.now();
  const dateStr = new Date().toISOString().slice(0,10); // 2026-01-22
  
  // 2. Get original filename parts
  const ext = path.extname(sourceFile);        // .txt
  const name = path.basename(sourceFile, ext); // important
  
  // 3. Create new backup name
  const backupName = `${name}-${dateStr}-${timestamp}${ext}`;
  
  // 4. Ensure backup directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  const destPath = path.join(outputDir, backupName);
  
  // 5. Copy file
  fs.copyFile(sourceFile, destPath, (err) => {
    if (err) {
      console.error('❌ Backup failed:', err.message);
    } else {
      console.log('✅ Backup created:');
      console.log(`  ${sourceFile} → ${backupName}`);
    }
  });
}

backupFile();
