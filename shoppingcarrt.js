class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  applyCoupon(coupon) {
    const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;
    const match = couponPattern.exec(coupon);
    if (!match) return { valid: false, total: this.getTotal() };

    const discountPercent = Number(match[2]);
    const discountedTotal = this.getTotal() * (1 - discountPercent / 100);
    return { valid: true, total: discountedTotal.toFixed(2) };
  }
}
