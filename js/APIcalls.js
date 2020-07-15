
async function getImageRandomDog() {

    const section = document.querySelector(".dog-list");

    try {
        for (let i = 0; i < 8; i++) {
            const response = await fetch(`https://dog.ceo/api/breeds/image/random`); // Petición GET a la API
            const data = await response.json(); // Transformamos la respuesta a un json.

            const div = document.createElement('div');
            div.classList.add('container-card-image');
            div.innerHTML = `
                <img src="${data.message}" alt="${data.message}"/>
                <p>Test<p/>
            `;
            section.appendChild(div);
        }
    } catch (err) {

    }
}

getImageRandomDog();