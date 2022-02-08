function printMessage(message) {
    // I want to check if there is no message
    //I want to assign text to this message
    // i want to console lig the message
    //if (!message) {
    //  message = "No value is here"
    //}
    //  console.log(message);
    //}
    //printMessage()

    // defualt value for the property argument

    function printMessage(message = " no value is here") {
        console.log(message)
    }

    printMessage();

}