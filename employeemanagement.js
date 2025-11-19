class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, 'Alice', 'HR', 5000),
  new Employee(2, 'Bob', 'IT', 7000),
  new Employee(3, 'Carol', 'Finance', 8000),
  new Employee(4, 'Dave', 'Marketing', 6000),
  new Employee(5, 'Eve', 'Sales', 5500),
];

employees.forEach(emp => console.log(`${emp.name} annual salary: ${emp.getAnnualSalary()}`));

const totalAnnualPayout = employees.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log('Total annual payout:', totalAnnualPayout);
