const fs = require('fs');

console.log("Reading JSON file...");

// Method 1: Callback way (simple)
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('File not found or error:', err.message);
    return;
  }
  
  // Parse JSON string → JavaScript object
  const jsonObject = JSON.parse(data);
  
  console.log('✅ JSON parsed successfully!');
  console.log('Total users:', jsonObject.total);
  console.log('First user:', jsonObject.users[0].name);
  console.log('Full object:', JSON.stringify(jsonObject, null, 2));
});
