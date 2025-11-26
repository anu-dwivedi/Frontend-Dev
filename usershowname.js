const user1 = {
  name: 'Tom',
  showName: () => {
    // 'this' in arrow function refers to outer scope, not the object
    console.log(this.name); // undefined
  }
};
user1.showName(); // undefined

// Fix with normal function
const user2 = {
  name: 'Tom',
  showName: function() {
    console.log(this.name);
  }
};
user2.showName(); // Tom

// Explanation: Arrow functions do not have their own 'this'.
