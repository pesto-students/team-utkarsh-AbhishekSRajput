async function exchangeRates(currencyCode) {
	if (currencyCode) {
		try {
			const response = await fetch(
				"https://api.exchangerate.host/latest"
			);

			if (response.status !== 200) {
				throw new Error(`Unable to Fetch Currency Exchange Rates`);
			}

			const { rates } = await response.json();
			currencyCode = currencyCode.toUpperCase();

			if (currencyCode in rates) {
				console.log(
					`Exchange Rate Of ${currencyCode} IS ${rates[
						currencyCode
					].toFixed(4)}`
				);
			} else {
				console.log(
					`The Entered Currency Code "${currencyCode}" IS Not Supported`
				);
			}
		} catch (error) {
			console.log(`Error :${error}`);
		}
	} else {
		console.log("Please Enter A valid Currency");
		console.log("EX: 'USD','AUD', 'INR'");
	}
}

exchangeRates("USD");
exchangeRates("INR");
exchangeRates("FAKE");
exchangeRates("");
