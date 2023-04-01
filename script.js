

class BankAccount {
    constructor(balance = 0, interestRate = 0.01) {
        this.balance = balance;
        this.interestRate = interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds: Charging a $5 fee`);
            this.balance -= 5;
        }
        else {
            this.balance -= amount;
        }
        return this;
    }
    displayBalance() {
        console.log(`Balance: ${this.balance}`);
        return this;
    }
    yieldInterest() {
        this.balance += (this.balance * this.interestRate);
        return this;
    }
}




class User {
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }
    addAccount(account) {
        this.accounts.push( new BankAccount(account.balance, account.interestRate) );
        return this;
    }
    makeDeposit(amount, account) {
        this.accounts[account].deposit(amount);
        return this;
    }
    makeWithdrawal(amount, account) {
        this.accounts[account].withdraw(amount);
        return this;
    }
    displayBalance(account) {
        this.accounts[account].displayBalance();
        return this;
    }
}

user1 = new User("Adam");
user1.addAccount({balance: 0, interestRate: 0.01});
user1.addAccount({balance: 0, interestRate: 0.02});

user1.makeDeposit(200, 0).makeDeposit(200, 0).makeDeposit(300, 0).makeWithdrawal(50, 0).displayBalance(0);
user1.makeDeposit(1000, 1).makeDeposit(2000, 1).makeWithdrawal(500, 1).makeWithdrawal(100, 1).displayBalance(1);





