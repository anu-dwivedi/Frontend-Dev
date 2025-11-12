let currentSalary = 50000;
const annualIncrement = 5; // in %

const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * annualIncrement) / 100;
  salaryProjection.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(salaryProjection);
