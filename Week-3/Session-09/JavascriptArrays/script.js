let nums = [4, 2, 9, 1, 8];
let evenNumbers = [];
let oddNumbers = [];

const divideArray = (num) => {
	if (num % 2 === 0) {
		evenNumbers.push(num);
	} else {
		oddNumbers.push(num);
	}
};

for (let i = 0; i < nums.length; i++) {
	divideArray(nums[i]);
}

console.log("Even Numbers:");
if (evenNumbers.length) {
	evenNumbers.sort();
	for (let i = 0; i < evenNumbers.length; i++) {
		console.log(evenNumbers[i]);
	}
} else {
	console.log("None");
}

console.log("Odd Numbers:");
if (oddNumbers.length) {
	oddNumbers.sort();
	for (let i = 0; i < oddNumbers.length; i++) {
		console.log(oddNumbers[i]);
	}
} else {
	console.log("None");
}
