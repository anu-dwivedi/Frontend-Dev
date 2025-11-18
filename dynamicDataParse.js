"use strict";

// Q1 - Dynamic Data Parser

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

// Check if value is valid number (exclude NaN, empty strings, invalid numeric strings)
function isValidNumber(value) {
    const num = Number(value);
    if (typeof value === "string") {
        // Skip if empty or just spaces
        if (value.trim() === "") return false;
        // Skip if conversion to number results in NaN
        if (isNaN(num)) return false;
    }
    // null and undefined also produce NaN; treat as invalid
    return !isNaN(num);
}

for (let i = 0; i < apiData.length; i++) {
    const val = apiData[i];
    const numVal = Number(val);
    const boolVal = Boolean(val);
    const strVal = String(val);

    if (isValidNumber(val)) {
        validNumbers.push(numVal);
    } else {
        invalidNumbers.push(val);
    }

    console.log(`Original: ${strVal}\n  Number: ${numVal}\n  Boolean: ${boolVal}\n`);
}

console.log("Valid numeric data array:", validNumbers);
console.log("Invalid numeric data array:", invalidNumbers);

// Hoisting: let and const declared arrays are block scoped and not hoisted like var.
// Debug observations: NaN, empty strings, and non-numeric strings correctly categorized.
