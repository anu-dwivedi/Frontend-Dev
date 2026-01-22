const fs = require('fs');
const path = require('path');

const targetDir = process.argv[2] || 'oldfiles';
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

console.log(`Scanning ${targetDir} for old files...`);

fs.readdir(targetDir, (err, files) => {
  if (err) {
    console.error('❌ Directory not found:', err.message);
    return;
  }

  let deletedCount = 0;

  files.forEach(file => {
    const filePath = path.join(targetDir, file);
    
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error('❌ Stat error:', err.message);
        return;
      }

      // Check if file modified > 7 days ago
      const age = Date.now() - stats.mtime.getTime();
      
      if (age > SEVEN_DAYS) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('❌ Delete failed:', file);
          } else {
            console.log('🗑️  Deleted:', file, `(Age: ${(age/86400000).toFixed(1)} days)`);
            deletedCount++;
          }
        });
      }
    });
  });

  console.log(`\n✅ Cleanup complete. Deleted ${deletedCount} old files.`);
});
