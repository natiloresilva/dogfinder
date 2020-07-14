'use strict';

class Validator {
    constructor() {
        //mensajes predeterminados
        this.invalidEmailError = 'Enter a valid email';
        this.emailExistsError = 'This Email has already been registered';
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
        validateUniqueEmail = (newEmail) => {
            const usersDB = db.getAllUsers();

            let emailUnique = true;

            if(usersDB.length > 0) {
                usersDB.forEach( (userObj) => {
                    //si el email ya está tomado, cambia el valor de la variable a false
                    if (userObj.email === newEmail) {
                        emailUnique = false;
                    }
                })

                if (emailUnique) {
                    //quita el mensaje de error
                    delete this.errors.emailExistsError;
                }
                else {
                    //si el email no es unico, poner msj de nvo
                    this.errors.emailExistsError = this.emailExistsError
                }

            }
        }
        //validar la longitud del password
        validatePassword = (password) => {
            if (password.length >= 6) {
                //quita el msj de error
                delete this.errors.passwordError;
            }
            else {
                //sino muestra el msj de error
                this.errors.passwordError = this.passwordError;
            }
        }

        //validar si el password y el repeat-password coinciden
        validatePasswordRepeat = (password, passwordRepeat) => {
            if (password === passwordRepeat) {
                //si las 2 password coinciden borra el error
                delete this.errors.repeatPasswordError;
            }
            else {
                //sino pone el msj
                this.errors.repeatPasswordError = this.repeatPasswordError;
            }
        }

        //Obtener el obj con el error, para mostrar al usuario en la pág. Signin
        getErrors = () => {
            return this.errors;
        }

        //reiniciar los errores mostrados, para el próximo Singup
        resetValidator = () => {
            this.errors = {
                invalidEmailError: this.invalidEmailError,
                passwordError: this.passwordError,
                repeatPasswordError: this.repeatPasswordError
            } 
        }
}

const validator = new Validator();