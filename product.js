function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  return this.price * ((100 - percent) / 100);
};

const prod1 = new Product("Phone", 20000);
const prod2 = new Product("Shoes", 3000);
const prod3 = new Product("Book", 350);

console.log(`Discounted price (Phone, 10%): ₹${prod1.applyDiscount(10)}`);
console.log(`Discounted price (Shoes, 25%): ₹${prod2.applyDiscount(25)}`);
console.log(`Discounted price (Book, 5%): ₹${prod3.applyDiscount(5)}`);

// Abstraction: You only use applyDiscount without manually calculating for each product.
