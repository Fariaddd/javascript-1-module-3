const messageSuccessContainer = document.querySelector(".message-container");
const messageInfoContainer = document.querySelector(".message-info");
const messageErrorContainer = document.querySelector(".message-error");
const messageWarningContainer = document.querySelector(".messafe-warning");


messageSuccessContainer.innerHTML = createToster("succes", "files is upplaed");
messageInfoContainer.innerHTML = createToster("info", "files is upplaed");
