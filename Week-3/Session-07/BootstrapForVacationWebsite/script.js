function showAlert(alertId) {
	const bootstrapAlert = document.getElementById(alertId);
	const collapse = new bootstrap.Collapse(bootstrapAlert);
	collapse.show();
}

const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
modalYesBtn.addEventListener("click", function () {
	const sendBtn = document.getElementById("send-message-btn");
	sendBtn.style.display = "none";
	showAlert("conf-alert");
});
