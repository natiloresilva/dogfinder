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


    
    handleEmailInput = (event) => {
        const email = event.target.value;

        console.log('email', email);
    }



    handlePasswordInput = (event) => {
        const password = event.target.value;

        console.log('password', password);
    }


    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;

        console.log('repeatPassword', repeatPassword);
    }




    //gestionamos el envio de los datos (submit)
    saveData = (event) => {
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;


        const newUser = new User(name, email, password,);

        //guardamos el nuevo usuario en la base de datos simulada

        db.saveNewUser( newUser);

        //vaciar el form
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";


    }


    //registramos las funciones para cada campo
    addListeners = () => {
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput)

        this.buttonInput.addEventListener("click", this.saveData)
    }
}

const signup = new Singup();

window.addEventListener("load", signup.addListeners);