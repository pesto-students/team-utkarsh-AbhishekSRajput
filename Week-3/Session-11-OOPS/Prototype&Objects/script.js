// Protecting The Object.

const person = {
	getAge() {
		return this._age;
	},
	setAge(age) {
		this._age = age;
	},
};

Object.defineProperty(person, "_name", {
	value: "Naruto",
	writable: false,
	enumerable: true,
});

Object.defineProperty(person, "_age", {
	value: 30,
	writable: true,
	enumerable: true,
});

Object.defineProperty(person, "_email", {
	value: "naruto@example.com",
	writable: false,
	enumerable: true,
});

console.log("name:", person._name);
console.log("email:", person._email);
person.setAge(3000);
console.log("age:", person.getAge());

// Javascript Prototype

function Vehicle(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

Vehicle.prototype.getDetails = function () {
	return `The Car Model ${this.model} maker ${this.make} in year ${this.year}`;
};

function Car(make, model, year, numDoors) {
	Vehicle.call(this, make, model, year);
	this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function () {
	return `${Vehicle.prototype.getDetails.call(this)}, Number of Doors: ${
		this.numDoors
	}`;
};

const vehicle = new Vehicle("Toyota", "Supra", 1999);
const car = new Car("Tata", "Jaguar", 2022, 4);

console.log(vehicle.getDetails());
console.log(car.getDetails());
