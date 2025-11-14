let productName = " wireless headphones PRO ";

// Trim, lowercase
let cleaned = productName.trim().toLowerCase();

// Capitalize first letter of each word
cleaned = cleaned.split(" ").map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");

// Replace "Pro" with "Pro Edition"
cleaned = cleaned.replace("Pro", "Pro Edition");

console.log(`Product Title: ${cleaned}`);
console.log(`Length: ${cleaned.length}`);
