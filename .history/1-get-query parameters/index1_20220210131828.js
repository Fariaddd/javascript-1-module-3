//http://my.site.com?userId=7

// example 1

console.log(document.location);

//  how to get the query param

console.log(document.location.search)

const querystring = document.location.search;
// in order to get the value
const params = new URLSearchParams(querystring);
console.log(params);

console.log(params.get("school"));

const mySchoolParam = params.get("school");

// i want to check that i have a param called scholl

if (!params.has("school")) {
    console.log("I have the para")
}
// console log i have the para
else if (params.get("school") === "noroff") {
    console.log("ok the param is Noroff")

}

// i want to check that this param is equal to noroff
// ok the param is Noroff
else {
    document.location.href = "second.html";
}

// else  redirect to another page