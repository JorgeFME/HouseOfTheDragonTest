function saveCharacterToDatabase(character) {
    fetch('http://localhost:3000/dragons/createCharacter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            personaje_id: character.id, // ID del personaje
            name: character.fullName,   // Nombre completo del personaje
            title: character.title,     // Título
            family: character.family,   // Familia
            image_url: character.imageUrl // URL de la imagen
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


// Función para eliminar un personaje de la base de datos
function deleteCharacterFromDatabase(characterId) {
    fetch(`http://localhost:3000/dragons/banish/${characterId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
