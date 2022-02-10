
const APIUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

// Select the Pokémon class container
const pokemonsContainer = document.querySelector(".pokemons"); // ul with class Pokémon

async function getPokemonNames() {
    try {
        const response = await fetch(APIUrl);
        const responseJSON = await response.json(); // convert the response to json data
        const pokemonsData = responseJSON.results;
        for (let i = 0; i < pokemonsData.length; i++) {
            pokemonsContainer.innerHTML += `<li><span>${pokemonsData[i].name}</span></li>`
        }

    } catch (error) {
        pokemonsContainer.innerHTML = `<li><span>sorry some error happened :(</span></li>`
    }
}

getPokemonNames().then(r => {

});