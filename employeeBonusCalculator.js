"use strict";

// Q2 - Employee Bonus Calculator

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];

    if (!emp.hasOwnProperty('salary') || !emp.hasOwnProperty('years')) {
      throw new Error(`Missing property in employee data at index ${i}`);
    }

    const salary = Number(emp.salary);
    const years = Number(emp.years);

    if (isNaN(salary) || isNaN(years)) {
      throw new Error(`Invalid salary or years data type for employee ${emp.name}`);
    }

    const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

    console.log(`Employee: ${emp.name} | Salary: ₹${salary} | Years: ${years} | Bonus: ₹${bonus.toFixed(2)}`);

  } catch (error) {
    console.error(`Error processing employee at index ${i}: ${error.message}`);
  }
}

// Hoisting notes:
// Variables declared inside try block are block scoped. Using strict mode avoids implicit globals.
// Template literals improve readability in output.
// Debug observations: Catches invalid data and missing properties properly.
