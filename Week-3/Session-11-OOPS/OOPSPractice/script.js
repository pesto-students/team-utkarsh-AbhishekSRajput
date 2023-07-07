// Inheritance

class Vehicle {
	constructor(make, model, year, color) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
	}

	drive() {
		console.log(`Driving ${this.make} ${this.model}`);
	}
}

class Car extends Vehicle {
	constructor(make, model, year, color, numSeats) {
		super(make, model, year, color);
		this.numSeats = numSeats;
	}
}

class RideShareCar extends Car {
	constructor(make, model, year, color, numSeats, isAvailable) {
		super(make, model, year, color, numSeats);
		this.isAvailable = isAvailable;
	}
}

const supraCar = new Vehicle("Toyota", "Supra", 1999, "orange");
console.log("supraCar", supraCar.drive());

const rideShare = new RideShareCar("Toyota", "Supra", 1999, "orange", 4, true);
console.log("rideShare", rideShare);

// Polymorphism

class Shape {
	calculateArea() {}
}

class Rectangle extends Shape {
	calculateArea(width, height) {
		return width * height;
	}
}
class Triangle extends Shape {
	calculateArea(base, height) {
		return (base * height) / 2;
	}
}
class Circle extends Shape {
	calculateArea(radius) {
		return Math.PI * Math.pow(radius, 2);
	}
}

const areaOfRectangle = new Rectangle();
console.log("areaOfRectangle", areaOfRectangle.calculateArea(3, 3));

const areaOfTriangle = new Triangle();
console.log("areaOfTriangle", areaOfTriangle.calculateArea(4, 6));

const areaOfCircle = new Circle();
console.log("areaOfCircle", areaOfCircle.calculateArea(12));

// Abstraction and encapsulation:

class BankAccount {
	constructor(accountNumber, balance, accountHolderName) {
		this._accountNumber = accountNumber;
		this._balance = balance;
		this._accountHolderName = accountHolderName;
	}
}

class CheckingAccount extends BankAccount {
	deposit(amount) {
		this._balance += amount;
	}
	withdraw(amount) {
		this._balance -= amount;
	}

	getBalance() {
		return this._balance;
	}
}

class SavingsAccount extends BankAccount {
	deposit(amount) {
		this._balance += amount;
	}
	withdraw(amount) {
		if (this._balance - amount < 0) {
			console.log("Insufficient Balance");
			return undefined;
		}
		this._balance -= amount;
	}

	getBalance() {
		return this._balance;
	}
}

const checkingAccount = new CheckingAccount(987654321, 987654, "random singh");
const savingsAccount = new SavingsAccount(123456789, 789456, "samosa doe");

console.log(checkingAccount.getBalance());
checkingAccount.deposit(5000);
console.log(checkingAccount.getBalance());
checkingAccount.withdraw(1000);
console.log(checkingAccount.getBalance());

console.log(savingsAccount.getBalance());
savingsAccount.deposit(10000);
console.log(savingsAccount.getBalance());
savingsAccount.withdraw(2000);
console.log(savingsAccount.getBalance());
