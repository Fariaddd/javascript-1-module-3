//API's API's
// as a front developer you will nedd to make requaste  to those
// APIs in order to get data and use it in your wev application

// example

//https://catfact.ninja/facts

const URL = "https://catfact.ninja/facts"

const factsContainer = document.querySelector(".container > my-cats-facts");

fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        console.log(data.data);
        const mycatFactsArr = data.data;
        for (let i = 0; i < mycatFactsArr.length; i++) {
            console.log(mycatFactsArr[i].fact);
        }
    })

    .catch((error) => {
        console.log(error);
    });