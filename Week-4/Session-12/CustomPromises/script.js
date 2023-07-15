class CustomPromise {
	constructor(executor) {
		this.state = "pending";
		this.value = undefined;
		this.error = undefined;
		this.onFulfilledCallbacks = [];
		this.onRejectedCallbacks = [];

		const resolve = (value) => {
			if (this.state === "pending") {
				this.state = "fulfilled";
				this.value = value;
				this.onFulfilledCallbacks.forEach((callback) =>
					callback(this.value)
				);
			}
		};

		const reject = (reason) => {
			if (this.state === "pending") {
				this.state = "rejected";
				this.error = reason;
				this.onRejectedCallbacks.forEach((callback) =>
					callback(this.error)
				);
			}
		};

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		const promise = new CustomPromise((resolve, reject) => {
			const onFulfilledCallback = (value) => {
				try {
					if (typeof onFulfilled === "function") {
						const result = onFulfilled(value);
						if (result instanceof CustomPromise) {
							result.then(resolve, reject);
						} else {
							resolve(result);
						}
					} else {
						resolve(value);
					}
				} catch (error) {
					reject(error);
				}
			};

			const onRejectedCallback = (reason) => {
				try {
					if (typeof onRejected === "function") {
						const result = onRejected(reason);
						if (result instanceof CustomPromise) {
							result.then(resolve, reject);
						} else {
							resolve(result);
						}
					} else {
						reject(reason);
					}
				} catch (error) {
					reject(error);
				}
			};

			if (this.state === "fulfilled") {
				setTimeout(() => onFulfilledCallback(this.value), 0);
			} else if (this.state === "rejected") {
				setTimeout(() => onRejectedCallback(this.error), 0);
			} else {
				this.onFulfilledCallbacks.push(onFulfilledCallback);
				this.onRejectedCallbacks.push(onRejectedCallback);
			}
		});

		return promise;
	}

	catch(onRejected) {
		return this.then(undefined, onRejected);
	}

	static resolve(value) {
		return new CustomPromise((resolve) => resolve(value));
	}

	static reject(reason) {
		return new CustomPromise((resolve, reject) => reject(reason));
	}
}

// const myPromise = new CustomPromise((resolve, reject) => {
// 	// Resolve the Promise after 1 second
// 	setTimeout(() => {
// 		resolve("Success!");
// 	}, 1000);
// });

// myPromise
// 	.then((result) => {
// 		console.log(result); // Output: Success!
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

//   You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
// const myPromise = new CustomPromise((resolve, reject) => {
// Reject the Promise immediately
// 	reject("Error!");
// });

// myPromise.catch((error) => {
// 	console.error(error); // Output: Error!!
// });
