var email;
var password;
var errorMessages = [];
var flag = 0;
var flag1 = 0;

function validate(event) {
    // event.preventDefault();
    email = document.querySelector('.email');
    password = document.querySelector('.password');
    errorMessages = [];
    flag = 0;
    flag1 = 0;


    if (!(email.value.includes('@') && email.value.includes('.'))) {
        errorMessages.push("Email is not valid.");
        email.style.border = "3px solid red";
        email.style.color = "red";
        email.style.backgroundColor = "rgba(255, 146, 146, 0.2)";
        email.focus();
        flag = 1;
    }

    if (password.value.length < 8) {
        errorMessages.push("Password should be at least 8 characters long.");
        flag1 = 1;
    }

    if (!/[A-Z]/.test(password.value)) {
        errorMessages.push("Password should contain at least one uppercase letter.");
        flag1 = 1;
    }

    if (!/[a-z]/.test(password.value)) {
        errorMessages.push("Password should contain at least one lowercase letter.");
        flag1 = 1;
    }

    if (!/[0-9]/.test(password.value)) {
        errorMessages.push("Password should contain at least one digit.");
        flag1 = 1;
    }

    if (!/[^a-zA-Z0-9]/.test(password.value)) {
        errorMessages.push("Password should contain at least one special character.");
        flag1 = 1;
    }

    if (errorMessages.length > 0) {

        if(flag1){
            showErrorField(password);
        }

        if(!flag){
            password.focus();
        }
        showError(errorMessages.join('\n'));
        errorMessages = [];
        return false;
    }

    if(!(flag || flag1)){
        return true;
    }

}

function showError(errorMessage) {
    alert(errorMessage);
}



function showErrorField(element){
    element.style.border = "3px solid red";
    element.style.color = "red";
    element.style.backgroundColor = "rgba(255, 146, 146, 0.2)";
    element.onfocus = function() {
        element.style.border = "3px solid red";
    };
}


document.querySelector('.email').oninput = function(){
    document.querySelector('.email').style.color = "black";
}

document.querySelector('.password').oninput = function(){
    document.querySelector('.password').style.color = "black";
}
