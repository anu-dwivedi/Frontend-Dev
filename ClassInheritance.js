class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }
  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const s2 = new Student('Aryan', 'ECE');
s2.showName();   // Name: Aryan
s2.showBranch(); // Branch: ECE

// Both class and prototype method behave syntactically differently but result is same.
