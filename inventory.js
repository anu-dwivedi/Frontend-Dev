const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 50000, stock: 3 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 1200, stock: 18 },
  { id: 3, name: 'Shirt', category: 'Apparel', price: 900, stock: 6 },
  { id: 4, name: 'Book', category: 'Stationery', price: 400, stock: 2 }
];

// 1. Low stock (<5)
function getLowStockProducts(arr) {
  return arr.filter(p => p.stock < 5);
}

// 2. Sort by price
function sortProductsByPrice(arr) {
  return [...arr].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue(arr) {
  return arr.reduce((sum, p) => sum + p.price * p.stock, 0);
}

// 4. Group by category
function groupByCategory(arr) {
  return arr.reduce((map, p) => {
    map[p.category] = map[p.category] || [];
    map[p.category].push(p);
    return map;
  }, {});
}

console.log("Low Stock:", getLowStockProducts(products));
console.log("Sorted by Price:", sortProductsByPrice(products));
console.log("Total Inventory Value:", calculateTotalInventoryValue(products));
console.log("Grouped by Category:", groupByCategory(products));
