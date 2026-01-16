const fs = require('fs');

// Read the input file
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Count words (split by spaces, new lines, tabs)
    const words = data.trim().split(/\s+/);
    const wordCount = words.length;

    const outputText = `Word Count: ${wordCount}`;

    // Write the word count to output file
    fs.writeFile('output.txt', outputText, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Word count written to output.txt');
    });
});
