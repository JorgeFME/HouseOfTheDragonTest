document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://thronesapi.com/api/v2/Characters';

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            populateCharacterSelect(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function populateCharacterSelect(characters) {
        const selectElement = document.getElementById('characterName');

        selectElement.innerHTML = '<option value="" disabled selected>Select a character</option>';

        characters.forEach(character => {
            const option = document.createElement('option');
            option.value = JSON.stringify(character); // Store entire character object as a string
            option.textContent = character.fullName;
            selectElement.appendChild(option);
        });
    }

    fetchData();
});
