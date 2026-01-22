const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const inputFile = args[0] || 'access.log';
const outputFile = args[1] || 'summary.json';

console.log(`Analyzing ${inputFile}...`);

const stats = {
  totalLines: 0,
  error: 0,
  warning: 0,
  info: 0
};

const readStream = fs.createReadStream(inputFile, {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks - memory efficient
});

let leftover = '';

readStream.on('data', (chunk) => {
  const lines = (leftover + chunk).split('\n');
  leftover = lines.pop(); // Last incomplete line carries over

  lines.forEach(line => {
    if (line.trim()) { // Skip empty lines
      stats.totalLines++;
      
      // Case-insensitive log level check (common positions)
      const upperLine = line.toUpperCase();
      if (upperLine.includes('ERROR')) stats.error++;
      else if (upperLine.includes('WARN') || upperLine.includes('WARNING')) stats.warning++;
      else if (upperLine.includes('INFO')) stats.info++;
    }
  });
});

readStream.on('end', () => {
  // Process final leftover line
  if (leftover.trim()) {
    stats.totalLines++;
    const upperLeftover = leftover.toUpperCase();
    if (upperLeftover.includes('ERROR')) stats.error++;
    else if (upperLeftover.includes('WARN') || upperLeftover.includes('WARNING')) stats.warning++;
    else if (upperLeftover.includes('INFO')) stats.info++;
  }

  const summary = {
    inputFile,
    analyzedAt: new Date().toISOString(),
    stats
  };

  fs.writeFileSync(outputFile, JSON.stringify(summary, null, 2));
  console.log('Analysis complete! Summary saved to', outputFile);
  console.log(summary);
});

readStream.on('error', (err) => {
  if (err.code === 'ENOENT') {
    console.error(`Error: Log file '${inputFile}' not found (ENOENT)`);
  } else if (err.code === 'EACCES') {
    console.error(`Error: Permission denied reading '${inputFile}' (EACCES)`);
  } else {
    console.error('Stream error:', err.message);
  }
  process.exit(1);
});
