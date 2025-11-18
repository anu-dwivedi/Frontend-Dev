let str = "45.67";
let num = parseFloat(str);

if (!isNaN(num)) {
  console.log(num + " is a valid number");
} else {
  console.log(str + " is not a valid number");
}
