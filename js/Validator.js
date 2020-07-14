'use strict';

class Validator {
    constructor() {
        //mensajes predeterminados
        this.invalidEmailError = 'Enter a valid email';
        this.emailExistError = 'This Email has already been registered';
        this.passwordError = 'Enter a password of 6 or more characters';
        this.repeatPasswordError = 'Passwords do not match';


        //objeto con los errores que se le mostrarán al usuario
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }
        
        //validar el nombre del email
        validateValidEmail = (email) => {

            //si el email es válido, quita el mensaje de error
            if (this.emailIsValid(email)) {
                delete this.errors.invalidEmailError;
            }
            else {
                //si no es válido, poner el mensaje que se mostrará
                this.errors.invalidEmailError = this.invalidEmailError;
            }
        }
        


        //validar que el email cumpla con ciertas condiciones de sintáxis
        emailIsValid = (email) => {
            //función auxiliar de 'validateEmail'
            const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            //método de prueba, devuelve true or false
            const isValid = emailRegEx.test(email);

            return isValid;
        }

        //validar que el email no está tomado (es único)
        //validar la longitud del password
        validatePassword = (password) => {}

        //validar si el password y el repeat-password coinciden
        validatePasswordRepeat = (password) => {}

        //Obtener el obj con el error, para mostrar al usuario en la pág. Signin
        getErrors = () => {
            return this.errors;
        }

        //reiniciar los errores mostrados
        resetValidator = () => {}
}

const validator = new Validator();