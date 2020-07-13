'use strict';

class Singup {
    constructor() {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");


        this.buttonInput = document.querySelector("#singup-button");
        this.errorWrapper = document.querySelector(".message-container");
    }



    this.emailInput = document.querySelector("#email");
    handleEmailInput = (event) => {}

    this.passwordInput = document.querySelector("#password");
    handlePasswordInput = (event) => {}

    this.repeatPasswordInput = document.querySelector("#repeat-password");
    handleRepeatPasswordInput = (event) => {}


    //gestionamos el envio de los datos (submit)
    saveData = (event) => {}


    //registramos las funciones para cada campo
    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput)

        this.buttonInput..addEventListener("click", this.saveData)
    }
}

const signup = new Singup();

window.addEventListener("load", signup.addListeners);