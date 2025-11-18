"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const txn = transactions[i];
    if (txn === null) {
      throw new Error("Null transaction");
    }
    if (!txn.hasOwnProperty('id') || !txn.hasOwnProperty('amount')) {
      throw new Error("Missing id or amount");
    }
    if (typeof txn.amount !== 'number') {
      throw new Error("Amount is not a number");
    }
    if (txn.amount < 0) {
      throw new Error("Negative amount");
    }
    validTransactions.push(txn);
  } catch (error) {
    invalidTransactions.push({transaction: transactions[i], error: error.message});
  }
}

console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);

console.log("Invalid transaction details:");
for (const invalid of invalidTransactions) {
  console.log(invalid);
}

// Debugging: Put breakpoint on line with `const txn` or in catch block to watch variable states.
