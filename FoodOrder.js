const menu = {
  pizza: 250,
  burger: 120,
  fries: 80,
  drink: 60
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if(!(item in menu)) throw new Error(`Invalid item: ${item}`);
      return menu[item];
    });
    const total = prices.reduce((sum, p) => sum + p, 0);
    return `Total Bill: ₹${total}`;
  } catch (err) {
    return `Order Error: ${err.message}`;
  }
}

// Test cases
console.log(calculateBill(['pizza', 'fries', 'drink']));
console.log(calculateBill(['burger', 'cake']));
