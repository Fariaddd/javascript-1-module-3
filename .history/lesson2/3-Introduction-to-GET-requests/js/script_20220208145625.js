//API's API's
// as a front developer you will nedd to make requaste  to those
// APIs in order to get data and use it in your wev application

// example

//https://catfact.ninja/facts

const URL = "https://catfact.ninja/facts"

const resultContainer = document.querySelector(".container");

fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
    })