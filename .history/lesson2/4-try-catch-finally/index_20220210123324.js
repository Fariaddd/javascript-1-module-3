// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]



// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword
//async function kitchen() {

//  try {
// Let's create a fake problem
//    await abc;
//}

//catch (error) {
//   console.log("abc does not exist", error)
//}

//finally {
//  console.log("Runs code anyways")
//}
//}

//kitchen()  // run the code




async function kitchen() {
    function getSomething() {
        console.log(`hello im response from the API`)

    }
    const result = document.querySelector(".result")


    try {
        getSomething();
        result.innerHTML = "SUCCESS!"


    }

    catch (error) {
        console.log("abc does not exist", error)
        result.innerHTML = "Nah there is an Error"
    }

    finally {
        console.log("Runs code anyways")
    }
}

//API's API's
// as a front developer you will nedd to make requaste  to those
// APIs in order to get data and use it in your wev application

// example

//https://catfact.ninja/facts

const URL = "https://catfact.ninja/facts"

const factsContainer = document.querySelector(".my-cats-facts");

fetch(URL)
    .then((Response) => Response.json())
    .then((data) => {
        console.log(data);
        console.log(data.data);
        const myCatFactsArr = data.data;
        for (let i = 0; i < myCatFactsArr.length; i++) {
            console.log(myCatFactsArr[i].fact);
            if (i === 4) {
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }
    })

    .catch((error) => {
        console.log(error);
    });
