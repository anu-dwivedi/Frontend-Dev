const fs = require('fs');

function logMessage(message) {
  // 1. Create timestamp
  const timestamp = new Date().toISOString();
  
  // 2. Format log entry
  const logEntry = `[${timestamp}] ${message}\n`;
  
  // 3. Append to log file (async)
  fs.appendFile('app.log', logEntry, 'utf8', (err) => {
    if (err) {
      console.error('Failed to write log:', err.message);
      return;
    }
    // 4. Also print to console
    console.log(logEntry.trim());
  });
}

// Test the logger
logMessage('Application started');
logMessage('User Rahul logged in');
logMessage('Database connection successful');
logMessage('Processing file upload');
