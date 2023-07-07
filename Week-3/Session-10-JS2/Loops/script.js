function drawTriangle(triangleSize) {
	let triangle = "";
	for (let i = 0; i <= triangleSize; i++) {
		for (let j = 0; j < i; j++) {
			triangle = triangle.concat("*");
		}
		triangle = triangle.concat("\n");
	}
	console.log(triangle);
}

drawTriangle(4);
