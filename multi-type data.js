// Variables of various data types
const name = "Alice"; // string
const age = 30; // number
const isMember = true; // boolean
const hobbies = ["reading", "traveling", "music"]; // array
const address = { city: "New York", zip: "10001" }; // object
const emptyValue = null; // null
let notDefined; // undefined

// Data summary array
const dataSummary = [
  { label: "Name", value: name, type: typeof name },
  { label: "Age", value: age, type: typeof age },
  { label: "Member?", value: isMember, type: typeof isMember },
  { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
  { label: "Address", value: address, type: typeof address },
  { label: "Empty Value", value: emptyValue, type: typeof emptyValue },
  { label: "Not Defined", value: notDefined, type: typeof notDefined },
];

// Print formatted report
console.table(dataSummary);
