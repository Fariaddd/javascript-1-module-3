// function expression
const showPetName = function (name) {
    console.log(name);
}

// fat Arrow funcstion

const showPetNameTwo = (name, age) => {
    console.log("example 2: the pet name is: " + name + " the age is " + age);

}

showPetName("rhino");
showPetNameTwo("Lion", "14");


// conctiontion

const name = " hesham"
const age = "30"
console.log("my name is hesham" + " " + name + " my age is" + " " + age);

console.log(` my name is ${name}  my age is ${age}`);


const cityName = "Oslo";

function showMeTheCityName() {
    console.log(cityName)
}                   // global

showMeTheCityName();

console.log(cityName);

function isScania() {
    if (cityName === "Oslo") {
        console.log(cityName + " is scandinavian")
    } else {
        console.log("not scandinavian")
    }
}

