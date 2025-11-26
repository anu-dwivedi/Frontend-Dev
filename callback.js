// Q5: Build pipeline - callback hell
function design(cb) {
  setTimeout(() => { console.log("Step: design"); cb(); }, 1000);
}
function build(cb) {
  setTimeout(() => { console.log("Step: build"); cb(); }, 1000);
}
function test(cb) {
  setTimeout(() => { console.log("Step: test"); cb(); }, 1000);
}
function deploy(cb) {
  setTimeout(() => { console.log("Step: deploy"); cb(); }, 1000);
}
function celebrate(cb) {
  setTimeout(() => { console.log("Step: celebrate"); cb(); }, 1000);
}

// Callback Hell
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => {
          console.log("Build pipeline completed (callback hell)");
        });
      });
    });
  });
});

// Async/Await version
function delayLog(step) {
  return new Promise(resolve =>
    setTimeout(() => { console.log("Step:", step); resolve(); }, 1000));
}

async function asyncPipeline() {
  await delayLog("design");
  await delayLog("build");
  await delayLog("test");
  await delayLog("deploy");
  await delayLog("celebrate");
  console.log("Build pipeline completed (async/await)");
}

asyncPipeline();

// Async/await improves readability by flattening deeply nested callbacks[5][6].
