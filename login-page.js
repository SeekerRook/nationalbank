const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user1333sb" && password === "aWVlZS1udHVhLXNi") {
        alert("You have successfully logged in.");
        location.href = "page.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
