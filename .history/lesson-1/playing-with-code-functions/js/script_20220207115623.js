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

function showMeTheCityName() {  // 1
    console.log("the city name is: " + cityName)
}                   // global

showMeTheCityName();

console.log(cityName); // 2

function isScania() {
    if (cityName === "Oslo") {
        console.log(cityName + " is scandinavian")
    } else {
        console.log("not scandinavian")
    }
}


{
    const name = "Uzo";
    let someBuildingNumber = 21;
    var someAge = 18;
    console.log(name)
    //console.log(car)
}

//console.log(car);
console.log(someAge);
//console.log(someBuildingNumber);

// this is a keyword..

const myObject = {  // parent
    number: 10,
    myFunction: function () {
        console.log(this, this.number)
    }
}

myObject.myFunction();


