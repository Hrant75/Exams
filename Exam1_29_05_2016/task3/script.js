
function checkName(){
    var element = document.getElementById('nameInput');
    var str = element.value;
    if(!validateName(str)){
        element.style.border = "3px solid red";
        document.getElementsByClassName('nameAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('nameAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';
    return true;
}

function checkLast(){
    var element = document.getElementById('lastInput');
    var str = element.value;
    if(!validateLast(str)){
        element.style.border = "3px solid red";
        document.getElementsByClassName('lastAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('lastAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';
    return true;
}

function checkEmail(){
    var element = document.getElementById('emailInput');
    var str = element.value;
    if(!validateEmail(str)){
        element.style.border = "3px solid red";
        document.getElementsByClassName('emailAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('emailAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';
    return true;
}

function checkPass(){
    var element = document.getElementById('passInput');
    var str = element.value;
    if(!validatePass(str)){
        element.style.border = "3px solid red";
        document.getElementsByClassName('passAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('passAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';
    return true;
}

function checkYear(){
    var element = document.getElementById('yearInput');
    var year = parseInt(element.value);
    if(year < 1900 || year > 2016){
        element.style.border = "3px solid red";
        document.getElementsByClassName('yearAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('yearAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';
    checkDay();
    return true;
}

function checkMonth(){
    var element = document.getElementById('monthInput');
    var month = parseInt(element.value);

    if(month < 1 || month > 12){
        element.style.border = "3px solid red";
        document.getElementsByClassName('monthAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('monthAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';

    checkDay();
    return true;
}

function checkDay(){
    var element = document.getElementById('dayInput');
    var day = parseInt(element.value);

    setDay();

    if( day < 1 || day > parseInt(element.getAttribute('max') ) ){
        element.style.border = "3px solid red";
        document.getElementsByClassName('dayAlert')[0].style.display = 'block';
        return false;
    }
    document.getElementsByClassName('dayAlert')[0].style.display = 'none';
    element.style.border = '1px solid #ccc';
    return true;
}

function setDay(){
    var month = parseInt(document.getElementById('monthInput').value);
    var year = parseInt(document.getElementById('yearInput').value);

    var element = document.getElementById('dayInput');

    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        element.setAttribute('max', '31');
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11){
        element.setAttribute('max', '30');
    }
    else if(month == 2){
        if(year%4 == 0){
            element.setAttribute('max', '29');
        } else{
            element.setAttribute('max', '28');
        }
    }
}

function submitClicked(){
    if( checkName() && checkLast() && checkPass() && checkEmail() && checkYear() && checkMonth() && checkDay() ){
        alert('Your data submitted \n \n Thank You !!!');
    } else {
        alert('Please correct highlighted filds');
    }
}

function validateName(name) {
    var re = /^[A-Z][a-z]{2,20}$/;
    if( re.test(name) ){
        return true;
    }
}
function validateLast(last) {
    var re = /^[A-Z][a-z]{2,40}$/;
    if( re.test(last) ){
        return true;
    }
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,7}))$/;
    if( re.test(email) ){
        return true;
    }
}
function validatePass(pass) {
    var re = /^[[a-zA-Z0-9]{6,}$/;
    if( re.test(pass) ){
        return true;
    }
}
