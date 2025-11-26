class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    console.log(`${this.name} works in ${this.department}`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} manages department: ${this.department}`);
  }
}

// Runtime polymorphism
const emp = new Employee("Sunil", "Engineering");
const mgr = new Manager("Ravi", "Sales");

emp.work(); // Sunil works in Engineering
mgr.work(); // Ravi manages department: Sales
