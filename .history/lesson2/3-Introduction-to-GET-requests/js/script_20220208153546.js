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
        const myCatFactsArr = data.data;
        for (let i = 0; i < myCatFactsArr.length; i++) {
            console.log(myCatFactsArr[i].fact);
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })

    .catch((error) => {
        console.log(error);
    });