
const validator = (signInEmailValue, signInPasswordValue) => {
    if (signInEmailValue.trim() === '' || signInPasswordValue.trim() === '') {
        return true;
    }
    else {
        return false;
    }
};

const validatorRegister = (emailRegisterValue, passwordRegisterValue, emailRegisterValid, passwordRegisterValid) => {

    if (emailRegisterValue === '' || passwordRegisterValue === '') {
        return true;
    }
    if (emailRegisterValid && passwordRegisterValid) {
        return false;
    }
    else {
        return true;
    }
};

export {
    validator,
    validatorRegister,
};