// I want a function which takes some message

// it returns an html tag with this message in it

function displayError(message = "some error happend") {
    return `<div class="error>${message}</div>`
}