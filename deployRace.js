// Q4: Manage server responses with Promise combinators

function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve("Server A deployed") : reject("Server A failed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve("Server B deployed") : reject("Server B failed");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(res => console.log("Deployment completed for all servers:", res))
  .catch(err => console.log("Deployment error:", err));

Promise.race([serverA(), serverB()])
  .then(fast => console.log("Fastest response:", fast))
  .catch(err => console.log("Race error:", err));
