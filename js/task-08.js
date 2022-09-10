const inputLogin = document.querySelector('.login-form');
inputLogin.addEventListener('submit', rst => {
    rst.preventDefault();

    const {
        elements: {email, password},
    } = rst.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Not all form fields are filled!");
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    rst.currentTarget.reset();
});
