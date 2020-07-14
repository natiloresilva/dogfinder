'use strict';

class Database {
     //recuperamos los usuarios - el array
    getAllUsers = () => {
        //recuperamos el string
        const usersStr = localStorage.getItem("users");
        //convertir el string a un array
        const usersArr = JSON.parse (usersStr);

        //Si todavis no hay usuarios, devuelve un array vacio
        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }
    }

    saveNewUser = (newUser) => {
        //recuperamos el array de los usuarios del localStorage
        const usersArr = this.getAllUsers ();

        //actualizamos el array de usuarios
        usersArr.push(newUser);

        //convertimos el array a un string
        const usersStr = JSON.stringify(usersArr);

        //Lo almacenamos de nuevo
        localStorage.setItem("users", usersStr);
    }
}

const db = new Database;