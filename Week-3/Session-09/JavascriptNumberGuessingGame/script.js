const isValidInput = (arg, count) => {
	if (isNaN(arg)) {
		return count === 0 ? 0 : count - 1;
	} else {
		return count + 1;
	}
};

function playGuessingGame(numberToGuess, totalGuesses = 10) {
	let userGuessCount = 0;
	let userGuessedNumber = 0;

	while (userGuessCount <= totalGuesses) {
		if (userGuessCount === 0 && !isNaN(userGuessedNumber)) {
			const isCancelled = window.prompt("Enter number between 1 and 100");

			userGuessedNumber =
				isCancelled === null ? null : parseInt(isCancelled);
			if (userGuessedNumber === null) {
				userGuessCount = 0;
				break;
			}
			userGuessCount = isValidInput(userGuessedNumber, userGuessCount);

			if (userGuessCount === 0) {
				const isCancelled = window.prompt("Please enter a number");

				userGuessedNumber =
					isCancelled === null ? null : parseInt(isCancelled);
				if (userGuessedNumber === null) {
					userGuessCount = 0;
					break;
				}
				userGuessCount = isValidInput(
					userGuessedNumber,
					userGuessCount
				);
			}
		}

		if (isNaN(userGuessedNumber)) {
			const isCancelled = window.prompt("Please enter a number");

			userGuessedNumber =
				isCancelled === null ? null : parseInt(isCancelled);
			if (userGuessedNumber === null) {
				userGuessCount = 0;
				break;
			}
			userGuessCount = isValidInput(userGuessedNumber, userGuessCount);
		}

		if (userGuessedNumber < numberToGuess) {
			const isCancelled = window.prompt(
				`${userGuessedNumber} is too small`
			);
			userGuessedNumber =
				isCancelled === null ? null : parseInt(isCancelled);
			if (userGuessedNumber === null) {
				userGuessCount = 0;
				break;
			}
			userGuessCount = isValidInput(userGuessedNumber, userGuessCount);
		}

		if (userGuessedNumber > numberToGuess) {
			const isCancelled = window.prompt(
				`${userGuessedNumber} is too large`
			);

			userGuessedNumber =
				isCancelled === null ? null : parseInt(isCancelled);
			if (userGuessedNumber === null) {
				userGuessCount = 0;
				break;
			}
			userGuessCount = isValidInput(userGuessedNumber, userGuessCount);
		}

		if (userGuessedNumber === numberToGuess) {
			window.alert("you guessed the right answer");
			break;
		}
	}

	return userGuessCount <= totalGuesses ? userGuessCount : 0;
}

console.log("return value", playGuessingGame(50, 15));
