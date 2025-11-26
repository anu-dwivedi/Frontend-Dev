function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getDepartment = function() {
  console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getSubject = function() {
  console.log(`Subject: ${this.subject}`);
};

const p1 = new Professor('Dr. Lee', 'Physics', 'Quantum Mechanics');
p1.getName();       // Person: Dr. Lee
p1.getDepartment(); // Department: Physics
p1.getSubject();    // Subject: Quantum Mechanics
