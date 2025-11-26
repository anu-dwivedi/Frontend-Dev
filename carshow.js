function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function() {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car('Toyota', 'Corolla');
const car2 = new Car('Honda', 'Civic');

car1.getDetails(); // Brand: Toyota, Model: Corolla
car2.getDetails(); // Brand: Honda, Model: Civic

// getDetails is shared via prototype
