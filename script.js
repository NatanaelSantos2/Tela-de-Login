function validateLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let message = document.getElementById("message");

    emailError.textContent = "";
    passwordError.textContent = "";
    message.textContent = "";

    let isValid = true;

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.textContent = "E-mail inválido";
        isValid = false;
    }
    if (password.length < 6) {
        passwordError.textContent = "A senha deve ter pelo menos 6 caracteres";
        isValid = false;
    }
    
    if (isValid) {
        message.textContent = "Login bem-sucedido!";
        message.style.color = "green";
    } else {
        message.textContent = "Erro no login. Verifique os campos.";
        message.style.color = "red";
    }
}