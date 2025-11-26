// Q10: Async food delivery pipeline

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random()<0.8 ? resolve("Order taken") : reject("Order step fail"), 1000+Math.random()*1000);
  });
}
function prepare() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random()<0.8 ? resolve("Food prepared") : reject("Prepare fail"), 1000+Math.random()*1000);
  });
}
function pack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random()<0.8 ? resolve("Package ready") : reject("Pack fail"), 1000+Math.random()*1000);
  });
}
function dispatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random()<0.8 ? resolve("Out for delivery") : reject("Dispatch fail"), 1000+Math.random()*1000);
  });
}
function deliver() {
  return new Promise((resolve, reject) => {
    setTimeout(() => Math.random()<0.8 ? resolve("Delivery completed!") : reject("Delivery fail"), 1000+Math.random()*1000);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1:", await takeOrder());
    console.log("Step 2:", await prepare());
    console.log("Step 3:", await pack());
    console.log("Step 4:", await dispatch());
    console.log(await deliver());
  } catch (err) {
    console.log("Pipeline failed!", err);
  }
}

runPipeline();

/*
Comments:
- Each step returns a Promise, resolved after random delay.
- Using async/await allows linear, readable code and centralized error handling (try/catch).
- The event loop schedules Promises, resolving each before continuing next await.
*/
