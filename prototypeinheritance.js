function Person(name) {
  this.name = name;
}
Person.prototype.showName = function() {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // Inherit name
  this.branch = branch;
}
// Set up prototype chain
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function() {
  console.log(`Branch: ${this.branch}`);
};

const s1 = new Student('Sara', 'CSE');
s1.showName();   // Name: Sara
s1.showBranch(); // Branch: CSE

// Prototype chain: s1 → Student.prototype → Person.prototype
