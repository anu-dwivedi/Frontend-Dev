const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(data) {
    if (!Array.isArray(data) || data.length === 0)
      throw new Error("Data cannot be empty");
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(u => u.steps > 7000).map(u => u.user);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, u) => sum + u.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(u => `${u.user}: Steps=${u.steps}, Calories=${u.calories}`);
  }
}

try {
  const analytics = new FitnessAnalytics(workoutData);
  console.log("Active users:", analytics.getActiveUsers());
  console.log("Average calories:", analytics.getAverageCalories());
  console.log("User summary:\n", analytics.getUserSummary().join('\n'));
} catch (e) {
  console.log("Error:", e.message);
}
