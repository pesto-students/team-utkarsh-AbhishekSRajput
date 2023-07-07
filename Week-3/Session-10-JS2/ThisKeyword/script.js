class Person {
	constructor(name, age, gender, nationality) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.nationality = nationality;
	}
	introduce() {
		return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
	}
}

const person1 = new Person("Rock", 40, "male", "American");
const person2 = new Person("Will", 39, "male", "American");
const person3 = new Person("Smith", 38, "male", "American");

console.log("person1.introduce: ", person1.introduce());
console.log("person2.introduce: ", person2.introduce());
console.log("person3.introduce: ", person3.introduce());

class Student extends Person {
	constructor(name, age, gender, nationality, subject) {
		super(name, age, gender, nationality);
		this.subject = subject;
	}

	study() {
		return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}. I am studying ${this.subject}.`;
	}
}
const student = new Student("Miles", 23, "Male", "American", "Physics");
console.log("student.study: ", student.study());
