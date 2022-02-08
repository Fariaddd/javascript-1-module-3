const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageErrorContainer = document.querySelector(".message-error");
const messageWarningContainer = document.querySelector(".message-warning");


messageSuccessContainer.innerHTML = createToster("succes", "files is upplaed");
messageInfoContainer.innerHTML = createToster("info", "files is upplaed");
messageErrorContainer.innerHTML = createToster("error", "sorry");
messageWarningContainer.innerHTML = createToster("warning", "file must be less than 5");
