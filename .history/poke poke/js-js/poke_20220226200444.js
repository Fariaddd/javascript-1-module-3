// mt point
//http://pok3aoi.co/api/v2/pokemon?offset=20&limit=40

const APIUrl = "http://pok3aoi.co/api/v2/pokemon?offset=20&limit=40";

// select pokemon container which has a pokeman class



const pokemonsContainer = document.querySelector(".pokemons");
// async function kitchen() {
//     async function kitchen() {

//         try {
//             // Let's create a fake problem
//             await abc;
//         }

//         catch (error) {
//             console.log("abc does not exist", error)
//         }
//     }

//kitchen();  // run the code

async function getPokemonNames() {
    try {
        const response = await fetch(APIUrl);
        // console.log(response);
        const responseJSON = await response.json(); // convert the response to json data
        console.log(responseJSON);
        const pokemonsData = responseJSON.results;
        console.log(pokemonsData);
        for (let i = 0; i < pokemonsData.length; i++) {
            console.log(pokemonsData[i]);
            pokemonsContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${pokemonsData[i].name}">${pokemonsData[i].name}</a></span></li>`
        }

    } catch (error) {
        console.log("Some error happened :(", error);
        pokemonsContainer.innerHTML = `<li><span>sorry some error happened :(</span></li>`

    }
}

getPokemonNames();



