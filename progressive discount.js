const totalPurchase = 7000;

let discountPercent = 0;
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
}

const discountAmount = (totalPurchase * discountPercent) / 100;
const finalPrice = Math.round(totalPurchase - discountAmount);

console.log(`Original total: $${totalPurchase}`);
console.log(`Discount percentage: ${discountPercent}%`);
console.log(`Final price after discount: $${finalPrice}`);
