class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

// Demo with try/catch
const acc = new BankAccount();
try {
  acc.deposit(5000);
  console.log("Balance after deposit:", acc.getBalance());
  acc.withdraw(2000);
  console.log("Balance after withdrawal:", acc.getBalance());
  acc.withdraw(4000); // error!
} catch (e) {
  console.log("Transaction error:", e.message);
}
