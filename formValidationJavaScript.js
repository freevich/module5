//
/**
 *
 * @type {HTMLElement}
 */
//

//-------------------------------Константы
const form = document.forms["userForm"];
const username = form["username"];
const email = form["email"];
const password = form["password"];
const password2 = form["password2"];
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
const errorMessageElements = document.getElementsByClassName("error-message");
//
//Делаем из объекта массив, чтоб работать с индексами и методами массива
var errorMessages = Object.entries(errorMessageElements);
//
// Обнуляем errorMessages
for(var i=0; i< errorMessageElements.length; i++ ){
    //
    errorMessageElements[i].innerHTML = ' ';
};
//
function checkLength(input, min, max) {
    //let stringErr = input.name + ' must be between 3 and 35 characters';
    if (input.value.length < min || input.value.length > max) {
        showError(input, input.name + ' must be between 3 and 35 characters');
    } else {
        showSuccess(input);
    }
};
//
function isValidEmail(input) {
    //
    if (emailPattern.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
};
//
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
};
//
//-------------------------------Функция подписки на событие проверки
form.addEventListener('submit', function(e) {
    e.preventDefault();
    //
    for(var i=0; i< errorMessageElements.length; i++ ){
        //
        errorMessageElements[i].innerHTML = ' ';
    };
    //
    checkLength(username, 3, 35);
    checkLength(password, 6, 35);
    isValidEmail(email);
    checkPasswordsMatch(password, password2);
});

//-------------------------------Вспомогательные функции
function showError(input,stringAndTemplate) {
    switch (input.name) {
        case "username":
            //
            errorMessageElements[0].innerHTML = stringAndTemplate;
            break;
        case "email":
            //
            errorMessageElements[1].innerHTML =  stringAndTemplate;
            break;
        case "password":
            //
            errorMessageElements[2].innerHTML =  stringAndTemplate;
            break;
        case "password2":
            //
            errorMessageElements[3].innerHTML =  stringAndTemplate;
            break;
        default:
            //
            console.log('default')
            break;
    }
};
//

function showSuccess(input) {
    //headerTitle
    let headerTitleElement = document.getElementById("headerTitle");
    let headerTitle = headerTitleElement.innerHTML;
    headerTitleElement.innerHTML = '!'+ headerTitle;
};
