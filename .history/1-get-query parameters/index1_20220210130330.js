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