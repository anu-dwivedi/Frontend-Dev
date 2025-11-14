let count = 0;

function increment() {
  function update() {
    count++;
    console.log("Count after increment: " + count);
  }
  update();
}

function decrement() {
  function update() {
    count--;
    console.log("Count after decrement: " + count);
  }
  update();
}

// Simulate click events
increment();
increment();
decrement();
