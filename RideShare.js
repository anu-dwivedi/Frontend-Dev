class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (typeof this.distance !== "number" || this.distance < 0)
      throw new Error("Invalid trip distance");
    return this.distance * 15; // ₹15/km
  }
}

// Test with error handling
const trip1 = new Trip("Delhi", "Noida", 20);
const trip2 = new Trip("Delhi", "Gurgaon", -5);

try {
  console.log("Fare:", trip1.calculateFare());
  console.log("Fare:", trip2.calculateFare());
} catch (e) {
  console.log("Trip Error:", e.message);
}
