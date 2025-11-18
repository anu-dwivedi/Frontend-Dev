"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const obj = JSON.parse(line);

    // Validate keys
    if (!obj.hasOwnProperty('user') || !obj.hasOwnProperty('age')) {
      throw new Error(`Missing keys in JSON at line ${i + 1}`);
    }

    // Convert age to number
    obj.age = Number(obj.age);

    if (isNaN(obj.age)) {
      throw new Error(`Invalid age value at line ${i + 1}`);
    }

    // Filter out under 18
    if (obj.age < 18) {
      console.log(`User under 18 filtered out at line ${i + 1}`);
      continue;
    }

    cleanData.push(obj);

  } catch (err) {
    errors.push(`Line ${i + 1}: ${err.message}`);
  }
}

console.log("Valid JSON entries:", cleanData);
console.log("Errors found:");
errors.forEach(e => console.log(e));

// Debug step: step through try-catch to observe flow control on error.
"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];
  try {
    const obj = JSON.parse(line);

    // Validate keys
    if (!obj.hasOwnProperty('user') || !obj.hasOwnProperty('age')) {
      throw new Error(`Missing keys in JSON at line ${i + 1}`);
    }

    // Convert age to number
    obj.age = Number(obj.age);

    if (isNaN(obj.age)) {
      throw new Error(`Invalid age value at line ${i + 1}`);
    }

    // Filter out under 18
    if (obj.age < 18) {
      console.log(`User under 18 filtered out at line ${i + 1}`);
      continue;
    }

    cleanData.push(obj);

  } catch (err) {
    errors.push(`Line ${i + 1}: ${err.message}`);
  }
}

console.log("Valid JSON entries:", cleanData);
console.log("Errors found:");
errors.forEach(e => console.log(e));

// Debug step: step through try-catch to observe flow control on error.
