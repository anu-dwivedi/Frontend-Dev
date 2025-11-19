// Product class for E-commerce Admin Panel
class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price.toFixed(2)}, Category: ${this.category}`;
  }
}

// Creating product objects
const products = [
  new Product(1, 'Laptop', 1500, 'Electronics'),
  new Product(2, 'Phone', 900, 'Electronics'),
  new Product(3, 'Refrigerator', 2000, 'Appliances'),
  new Product(4, 'Shoes', 1200, 'Fashion'),
  new Product(5, 'Watch', 800, 'Accessories'),
];

// Display products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);
expensiveProducts.forEach(p => console.log(p.displayDetails()));
