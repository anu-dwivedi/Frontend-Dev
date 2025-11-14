const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);

cart.forEach(product => {
  if (product.category === "electronics") {
    total -= product.price * 0.10; // 10% discount
  } else if (product.category === "fashion") {
    total -= product.price * 0.05; // 5% discount
  }
});

if (total > 50000) {
  total *= 0.95; // Extra 5% discount
}

console.log(`Final Total after Discounts: ${total.toFixed(2)}`);
