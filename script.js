const loginForm = document.getElementById("login-form"); 
const emailInput = document.getElementById("email"); 
const passwordInput = document.getElementById("password");
const credentials = { email: "example@email.com", password: "password123" };

loginForm.addEventListener("submit", (e) => { e.preventDefault();

if (emailInput.value === credentials.email && passwordInput.value === credentials.password) { 
    alert("Login successful!"); } else { alert("Invalid email or password."); } });