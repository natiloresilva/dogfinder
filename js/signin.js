'use strict';

class Signup {
    constructor() {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");


        this.buttonInput = document.querySelector("#singup-button");
        this.errorsWrapper = document.querySelector(".message-container");
    }


    
    handleEmailInput = (event) => {
        const email = event.target.value;

        //validar el texto del input email
        validator.validateValidEmail(email);

        const errors = validator.getErrors();

        // si el nombre del email es válido

        if (!errors.invalidEmailError) {
            //comprueba si el email es único
            validator.validateUniqueEmail(email);
        }
            this.setErrorsMessages();
            this.checkButton();
    }



    handlePasswordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;


        //validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        this.setErrorsMessages();
        this.checkButton();
    }


    handleRepeatPasswordInput = (event) => {
        const passwordRepeat = event.target.value;
        const password = this.passwordInput.value;
        

        //validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

            this.setErrorsMessages();
            this.checkButton();
    }




    //gestionamos el envio de los datos (submit)
    saveData = (event) => {
        event.preventDefault();
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;


        const newUser = new User(name, email, password);

        //guardamos el nuevo usuario en la base de datos simulada

        db.saveNewUser( newUser);

        //vaciar el form
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

        this.showSuccessMessage();
        this.removeMessages();

        // reiniciar los errores del `validator`
        validator.resetValidator();
        // desactivar el botón Sign Up de nuevo
        this.buttonInput.disabled = true;
    }


    //registramos las funciones para cada campo
    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

        this.buttonInput.addEventListener("click", this.saveData);
    }

    showSuccessMessage = () => {
        // vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();
        // convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);

        if (errorsStringsArr.length > 1) {
            return;
        }

        const successMessageP = document.createElement('div');
        successMessageP.classList.add("correct-message");
        successMessageP.innerHTML = "Your account has been created successfully";

        this.errorsWrapper.appendChild(successMessageP);

    }

    // activar o desactivar el botón de envio (Sign Up)
    checkButton = () => {
        const errorsObj = validator.getErrors();
        const errorsArr = Object.values(errorsObj);


        if (errorsArr.length > 0) {
            this.buttonInput.disabled = true;
        }
        else {
            this.buttonInput.disabled = false;
        }
    }


    removeMessages = () => {
        setTimeout(() => {
            this.errorsWrapper.innerHTML = "";
        }, 4000)
    }



    setErrorsMessages = () => {
        //vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";
        
        const errorsObj = validator.getErrors();
        
        //convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);

        errorsStringsArr.forEach( (errorStr) => {
        const errorMessageP = document.createElement('p');
        errorMessageP.innerHTML = errorStr;

        this.errorsWrapper.appendChild(errorMessageP);
        })
    }
}

const signup = new Signup();

window.addEventListener("load", signup.addListeners);