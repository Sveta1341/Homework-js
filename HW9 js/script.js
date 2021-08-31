class Account {
	constructor(balance = 0) {
		this.history = [`init balance: ${balance}`];
		this.balance = balance;
	}
	deposit(amount) {
		this.history.push(`deposit: ${amount}`);
		this.balance += amount;
	}
	withdraw(amount) {
		if (this.balance < amount) {
			throw new Error('not enough balance');
		}
		this.history.push(`withdraw: ${amount}`);
		this.balance -= amount;
	}
	freeze(amount) {
		this.freezed = 0;
		if (this.balance >= amount) {
			this.balance = this.balance - amount;
			this.freezed += amount;
			this.history.push(`freezed: ${amount}`);
		} else {
			throw new Error('you have not enough money');
		}

	}
	unfreeze(amount) {
		if (this.freezed >= amount) {
			this.freezed -= amount;
			this.balance = this.balance + amount;

			this.history.push(`unfreezed ${amount}`);
		} else {
			throw new Error('you have not enough money')
		}

	}
	getBalance() {
		return ` balance: ${this.balance}`;
	}

	getHistory() {
		let result = this.history.slice(0);
		result.push(`current balance: ${this.balance}`);
		return result;
	}
	getFrozenBalance() {
		this.history.push(`frozen ballance ${this.freezed}`);
		console.log(`Frozen balance: ${this.freezed}`);
		return this.freezed;
	}
}

let account = new Account(0);
console.log(account.getBalance());
account.deposit(200);
console.log(account.getBalance());
account.withdraw(120);
console.log(account.getBalance());
account.freeze(80);
console.log(account.getBalance());
console.log(account.getFrozenBalance());
//account.unfreeze(90);
account.unfreeze(70);
console.log(account.getBalance());
console.log(account.getFrozenBalance());
console.log(account.getHistory());
account.unfreeze(10);
console.log(account.getBalance());





