const x = 16.75;

const rounded = Math.round(x);
const sqrt = Math.sqrt(x);
const power = Math.pow(x, 3);
const randomNum = Math.floor(Math.random() * 41) + 10;

const summary = `
Math Utility Dashboard:

Rounded: ${rounded}
Square Root: ${sqrt.toFixed(2)}
Power (x^3): ${power.toFixed(2)}
Random Number (10-50): ${randomNum}
`;

console.log(summary);
