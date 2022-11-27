

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    	
	const us =  CryptoJS.MD5(username).toString() ;
	const pd =  CryptoJS.MD5(password).toString() ;
	if (us  === "cef62998fb5161d450e49e1b5cbf69e9" && pd === "53923320f37b92bdcb42a57fc02f35fa") {
        console.log(us)
	console.log(pd)
	alert("You have successfully logged in.");
        url=CryptoJS.MD5(username+password).toString()+".html";
        location.href = url;
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
