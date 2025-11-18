const values = ["50", "hello", false, null, "100px"];

values.forEach(value => {
  console.log(`Value: ${value}`);
  console.log("Number():", Number(value));    // Convert to Number
  console.log("Boolean():", Boolean(value));  // Convert to Boolean
  console.log("String():", String(value));    // Convert to String
  console.log("-----");
});
