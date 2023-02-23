// $(document).ready(() => {});
function nav() {
	document.getElementById("navigate").style.backgroundColor =
		"rgba(0,0,0,0.7)";
}

function validat() {
	let nme = document.getElementById("cstname").value;
	let nmex = /^[a-z A-Z]{2,15}$/;
	let ml = document.getElementById("cstmail").value;
	let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (nme == "") {
		document.getElementById("name_span").innerHTML =
			"Oh no......!Name Field is empty";
		return false;
	} else if (!nmex.test(nme)) {
		("Please enter valid Name");
		return false;
	} else if (ml == "") {
		document.getElementById("mail_span").innerHTML =
			"Please enter a mail id";
		return false;
	} else if (!mail.test(ml)) {
		document.getElementById("mail_span").innerHTML = "Enter valid mail id";
		return false;
	} else {
		document.getElementById("alrt").innerHTML = "All set ";
		alert("Successfully Reserved");
		return true;
	}
}
