
const validator = () => {

    const btnSignIn = document.getElementById('ingreso') 
    const emailSignIn = document.querySelector('#mail');
    const passwordSignIn = document.querySelector('#password'); 

    if (emailSignIn.value === '' || passwordSignIn.value === '') {
        btnSignIn.disabled = true;
        console.log(' entra al if'); 
    }
    else {
        btnSignIn.disabled = false;
        console.log('entra el else');
    }
};
 
const validatorRegister = () => {

    const emailRegister = document.getElementById('email-register');
    const passwordRegister = document.getElementById('password-register');
    const btnRegister = document.getElementById('btn-register');

    if (emailRegister.value === '' || passwordRegister.value === '') {
        btnRegister.disabled = true;
    }
     if (emailRegister.validity.valid && passwordRegister.validity.valid) {
        btnRegister.disabled = false;
    } 
    else {
        btnRegister.disabled = true;
    }
};

export {
    validator,
    validatorRegister,
};