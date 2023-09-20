document.getElementById("btn").addEventListener("click", function buscarDiscografia() {
    const artista = document.getElementById('artista').value;
    const apiKey = '76734c00559570722ab60a4192635669';
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artista}&api_key=${apiKey}&format=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const discografia = data.topalbums.album;
            
            // Limpiar resultados anteriores
            document.getElementById('discografia').innerHTML = '';
            
            // Mostrar la discografía
            for (let i = 0; i < 10; i++) {
                let album = `
                <div>
                    <h2>${discografia[i].name}</h2>
                    <img src="${discografia[i].image[2]['#text']}" alt="${discografia[i].name}">
                </div>`
                document.getElementById('discografia').innerHTML += album;
            }
        })
        .catch(error => {
            console.error('Error al buscar la discografía:', error);
        });
});