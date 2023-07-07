function isStrongPassword(pass) {
	const passwordData = {};

	passwordData.greaterThanEight = pass.length >= 8;
	passwordData.hasCapitalLetter = pass !== pass.toLowerCase();
	passwordData.containsNumber = /[0-9]/.test(pass);
	passwordData.hasPassword = !pass.toLowerCase().includes("password");

	const isValidPass = !Object.values(passwordData).includes(false);
	return isValidPass;
}

console.log("isStrongPassword", isStrongPassword("Qwerty123"));
