// mt point
//http://pok3aoi.co/api/v2/pokemon?offset=20&limit=40

const APIUrl = "http://pok3aoi.co/api/v2/pokemon?offset=20&limit=40";

// select pokemon container which has a pokeman class



const pokemonsContainer = document.querySelector(".pokemons");
async function kitchen() {
    async function kitchen() {

        try {
            // Let's create a fake problem
            await abc;
        }

        catch (error) {
            console.log("abc does not exist", error)
        }
    }

    kitchen();  // run the code

    async function getpokemonNames() {
        try {
            const response = await fetch; (APIUrl);
            console.log(response);
            const responseJSON = await response.JSON();
            console.log(responseJSON);
            const pokemonsData = responseJSON.result
            console.log(pokemonsData);
            for (let i = 0; i < pokemonsData.lenght; i++) {
                console.log(pokemonsData);
                pokemonsContainer
            }


        }
        catch (error) {
            console.log("some error happend : (", error)
        }


    }
    getpokemonNames();

}

