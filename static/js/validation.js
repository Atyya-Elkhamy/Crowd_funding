function confirm(pass1,pass2){
    if (pass1 === pass2){
        return true;
    }
    return false;
}
function password(password){
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
    
}
function strings(str){
    str = str.trim();
    if (typeof str !== 'string' || str.trim() === '' || !/^[A-Za-z]+$/.test(str)) {
        return false;
    }
    return true;
}
function cost(cost){
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(cost) && cost > 2000 ;
}
function Email(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function dates(s_date,e_date){
    const startDate = new Date(s_date);
    const endDate = new Date(e_date);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return false;
    }

    return endDate > startDate;
}
function phone(phone){
    const regex = /^(010|011|012|015)\d{8}$/;
    return regex.test(phone);
}
function showError(element, message) {
    let inputGroup = element.closest(".input-group");
    let errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    if (inputGroup){
        inputGroup.insertAdjacentElement("afterend",errorElement);
    }
    else{
        element.insertAdjacentElement("afterend",errorElement);
    }
}
function clearErrors() {
    let errorMessages = document.querySelectorAll('.error-message');
    if (errorMessages.length == 0 ){
        return;
    }
    errorMessages.forEach(error => error.remove());
}
function validateAlphaNumeric(input) {
    input = input.trim();
    const regex = /^(?=.*[A-Za-z])[A-Za-z\d]+$/;
    return regex.test(input);
}

export {phone,dates,password,strings,Email,cost,confirm,showError,clearErrors,validateAlphaNumeric};
