const os = require('os');
const fs = require('fs');

// Function to log system information
function logSystemInfo() {
    const cpuInfo = os.cpus()[0].model;
    const totalMemory = (os.totalmem() / (1024 * 1024)).toFixed(2); // MB
    const freeMemory = (os.freemem() / (1024 * 1024)).toFixed(2);   // MB
    const platform = os.platform();
    const uptime = (os.uptime() / 60).toFixed(2); // minutes
    const timestamp = new Date().toLocaleString();

    const logData = `
Time: ${timestamp}
Platform: ${platform}
CPU: ${cpuInfo}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
Uptime: ${uptime} minutes
---------------------------
`;

    fs.appendFile('systemInfo.log', logData, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
    });
}

// Log system info every 5 seconds
setInterval(logSystemInfo, 5000);

console.log('System information logging started...');
