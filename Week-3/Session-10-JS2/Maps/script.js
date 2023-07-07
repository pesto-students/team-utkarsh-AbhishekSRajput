function calcWordFrequencies() {
	const userString = prompt("Add list of words");
	const splitString = userString.split(" ");
	const mappedValue = new Map();
	console.log("splintedString", splitString);

	for (var i = 0; i < splitString.length; i++) {
		var key = splitString[i];
		if (mappedValue.has(key)) {
			mappedValue.set(key, mappedValue.get(key) + 1);
		} else {
			mappedValue.set(key, 1);
		}
	}

	splitString.forEach((x) => {
		console.log(x, mappedValue.get(x));
	});
}

calcWordFrequencies();
