// Q7: Promise.allSettled for dashboard section loading

function loadProfile() { return new Promise((r, rej) => setTimeout(() => Math.random()<0.7 ? r("Profile Loaded") : rej("Profile Load Failed"), 2000)); }
function loadPosts() { return new Promise((r, rej) => setTimeout(() => Math.random()<0.7 ? r("Posts Loaded") : rej("Posts Load Failed"), 1500)); }
function loadMessages() { return new Promise((r, rej) => setTimeout(() => Math.random()<0.7 ? r("Messages Loaded") : rej("Messages Load Failed"), 1000)); }

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]).then(results => {
  results.forEach((result, idx) => {
    if (result.status === "fulfilled") {
      console.log(["Profile", "Posts", "Messages"][idx], "Success:", result.value);
    } else {
      console.log(["Profile", "Posts", "Messages"][idx], "Failed:", result.reason);
    }
  });
  console.log("Total time elapsed:", (Date.now() - start), "ms");
});
