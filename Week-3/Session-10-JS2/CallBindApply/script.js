class Calculator {
	add(a, b) {
		return a + b;
	}
	subtract(a, b) {
		return a - b;
	}
	multiply(a, b) {
		return a * b;
	}
	divide(a, b) {
		return a / b;
	}
}

class ScientificCalculator extends Calculator {
	square(a) {
		return Math.pow(a, 2);
	}
	cube(a) {
		return Math.pow(a, 3);
	}
	power(a, b) {
		return Math.pow(a, b);
	}
}

const scientificCalculator = new ScientificCalculator();
const addCall = Calculator.prototype.add.call(scientificCalculator, 10, 15);
const subtractApply = Calculator.prototype.subtract.apply(
	scientificCalculator,
	[10, 5]
);

const multiplyByTwo = Calculator.prototype.multiply.bind(
	scientificCalculator,
	2
);

const powerOfThree = ScientificCalculator.prototype.power.bind(
	scientificCalculator,
	3
);

console.log("addCall", addCall);
console.log("subtractApply", subtractApply);
console.log("multiplyByTwo", multiplyByTwo(5));
console.log("powerOfThree", powerOfThree(2));
