class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if (!this.marks.length) return 0;
    return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 85) return 'A';
    if (avg >= 70) return 'B';
    if (avg >= 50) return 'C';
    return 'F';
  }
}

// Test with 3 students
const students = [
  new Student("Alice", [98, 92, 89, 85]),
  new Student("Bob", [78, 80, 88]),
  new Student("Charlie", [42, 50, 55])
];

students.forEach(s => {
  console.log(`${s.name}: Avg=${s.calculateAverage().toFixed(2)}, Grade=${s.getGrade()}`);
});
