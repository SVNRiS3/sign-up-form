const pwds = document.querySelectorAll(".error");
const submitButton = document.querySelector(".submit-button");

pwds.forEach((pwd) => {
	pwd.addEventListener("input", (e) => {
		pwds[0].children[1].value === pwds[1].children[1].value &&
		pwds[0].children[1].value.length > 0
			? pwds.forEach((pwd) => {
					pwd.classList.remove("error");
			  })
			: pwds.forEach((pwd) => {
					pwd.classList.add("error");
			  });
	});
});

submitButton.addEventListener("click", (e) => {
	if (pwds[0].classList.contains("error")) {
		e.preventDefault();
		alert("Passwords do not match!");
	}
});
