
async function getImageRandomDog() {

    const section = document.querySelector(".dog-list");

    try {
        for (let i = 1; i <= 8; i++) {
            const responseImage = await fetch(`https://dog.ceo/api/breeds/image/random`); // Petición GET a la API
            const dataImage = await responseImage.json(); // Transformamos la respuesta a un json.

            const responseName = await fetch(`https://jsonplaceholder.typicode.com/users/${i}`); // Petición GET a la API
            const dataName = await responseName.json(); // Transformamos la respuesta a un json.
            const nameDog = dataName.name.split(" ")[1];

            const div = document.createElement('div');
            div.classList.add('container-card-image');
            div.innerHTML = `
                <img src="${dataImage.message}" alt="${dataImage.message}"/>
                <p>${nameDog}<p/>
            `;
            section.appendChild(div);
        }
    } catch (err) {

    }
}

getImageRandomDog();