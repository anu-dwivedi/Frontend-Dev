const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const fsSync = require('fs');

// Promisify copyFile and unlink (not in fs.promises by default in all versions)
const copyFile = promisify(require('fs').copyFile);
const unlink = promisify(require('fs').unlink);

const args = process.argv.slice(2);
const command = args[0];

async function showHelp() {
  console.log(`
File Manager Commands (Async/Await version):
  read <filename>
  write <filename> <content>
  append <filename> <content>
  copy <src> <dest>
  delete <filename>
  list <directory>
  `);
  process.exit(0);
}

if (!command) {
  showHelp();
}

function getContent(startIndex) {
  return args.slice(startIndex).join(' ');
}

async function handleError(err, context) {
  if (err.code === 'ENOENT') {
    console.error(`Error: No such file or directory in ${context} (ENOENT)`);
  } else if (err.code === 'EACCES') {
    console.error(`Error: Permission denied in ${context} (EACCES)`);
  } else {
    console.error(`Error in ${context}:`, err.message);
  }
  process.exit(1);
}

// Main async handler
async function main() {
  try {
    switch (command) {
      case 'read': {
        const filename = args[1];
        if (!filename) throw new Error('Usage: read <filename>');
        const data = await fs.readFile(filename, 'utf8');
        console.log(data);
        break;
      }
      case 'write': {
        const filename = args[1];
        const content = getContent(2);
        if (!filename || !content) throw new Error('Usage: write <filename> <content>');
        await fs.writeFile(filename, content, 'utf8');
        console.log(`File '${filename}' written successfully`);
        break;
      }
      case 'append': {
        const filename = args[1];
        const content = getContent(2);
        if (!filename || !content) throw new Error('Usage: append <filename> <content>');
        await fs.appendFile(filename, content + '\n', 'utf8');
        console.log(`Appended to '${filename}' successfully`);
        break;
      }
      case 'copy': {
        const src = args[1];
        const dest = args[2];
        if (!src || !dest) throw new Error('Usage: copy <src> <dest>');
        await copyFile(src, dest);
        console.log(`Copied '${src}' to '${dest}'`);
        break;
      }
      case 'delete': {
        const filename = args[1];
        if (!filename) throw new Error('Usage: delete <filename>');
        await unlink(filename);
        console.log(`Deleted '${filename}' successfully`);
        break;
      }
      case 'list': {
        const dir = args[1] || '.';
        const files = await fs.readdir(dir, { withFileTypes: true });
        console.log(`Files in '${dir}':`);
        for (const file of files) {
          console.log(`  ${file.name} (${file.isDirectory() ? 'dir' : 'file'})`);
        }
        break;
      }
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  } catch (err) {
    if (err.message.includes('Usage') || err.message.includes('Unknown')) {
      console.error(err.message);
    } else {
      await handleError(err, command);
    }
  }
  process.exit(0);
}

main();
