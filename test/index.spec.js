import { 
  validator,
  validatorRegister,
 } from "../src/view-controller/input-validator.js";



describe('validator', () => {
  it('debe retornar true dado que el email y el password sean vacios', () => {
    //arrange
    const email = '';
    const password = '';

    //act
    const result = validator(email, password);
    
    //assert
    expect(result).toBe(true)
  });
  it('debe retornar false dado que el email y el password no sean vacios', () => {
    //arrange
    const email = 'hola@hola.com';
    const password = '1234567';

    //act
    const result = validator(email, password);
    
    //assert
    expect(result).toBe(false)
  });
  it('debe retornar true dado que el email y el password son espacios en blanco', () => {
    //arrange
    const email = '          ';
    const password = '          ';

    //act
    const result = validator(email, password);
    
    //assert
    expect(result).toBe(true)
  });
});

describe('validatorRegister', () => {
  it('debe retornar true cuando los inputs esten vacios', () => {
    //arrange
    const email = '';
    const password = '';
    const user = '';
    const fname = '';
    const lname = '';
    const birth = '';
    const country = '';
    const emailValid = false;
    const passwordValid = false;

    //act
    const result = validatorRegister(email, password, user, fname, lname, birth, country, emailValid, passwordValid);

    //assert
    expect(result).toBe(true);
  });
  it('debe retornar true cuando el email ingresado no sea valido', () => {
    //arrange
    const email = '234567n';
    const password = '234567890';
    const user = 'lperez';
    const fname = 'luisa';
    const lname = 'perez';
    const birth = '10/11/90';
    const country = 'venezuela';
    const emailValid = false;
    const passwordValid = true;

    //act
    const result = validatorRegister(email, password, user, fname, lname, birth, country, emailValid, passwordValid);

    //assert
    expect(result).toBe(true);
  });
  it('debe retornar false cuando el email y el password ingresados sean validos', () => {
    //arrange
    const email = 'hola@hola.com';
    const password = '234567890';
    const user = 'lperez';
    const fname = 'luisa';
    const lname = 'perez';
    const birth = '10/11/90';
    const country = 'venezuela';
    const emailValid = true;
    const passwordValid = true;

    //act
    const result = validatorRegister(email, password, user, fname, lname, birth, country,emailValid, passwordValid);

    //assert
    expect(result).toBe(false);
  });
});

