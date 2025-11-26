// Q8: Order submission retry logic

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve("Order submitted") : reject("Submit failed");
    }, 800);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === 3) throw "Order could not be processed";
    }
  }
}

processOrder()
  .catch(err => console.log(err));
