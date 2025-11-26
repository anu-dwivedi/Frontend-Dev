// Q1: Async Coffee Maker

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log("Step 1: Water boiled.");
        resolve();
      } else {
        reject("Boiling failed!");
      }
    }, 1000 + Math.random() * 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log("Step 2: Coffee brewed.");
        resolve();
      } else {
        reject("Brewing failed!");
      }
    }, 1000 + Math.random() * 1000);
  });
}

function pourCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        console.log("Step 3: Coffee poured into cup.");
        resolve();
      } else {
        reject("Pouring failed!");
      }
    }, 1000 + Math.random() * 1000);
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourCup)
  .then(() => console.log("Coffee ready for the team!"))
  .catch(err => console.log("Coffee process failed:", err));
