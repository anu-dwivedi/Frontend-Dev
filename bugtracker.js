
// Q3: Modernize bug tracker using Promises

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      } else {
        reject("API fetch failed!");
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bug List:");
    console.table(bugs);
  })
  .catch(err => console.log("Error fetching bugs:", err));
