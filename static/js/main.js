import * as validation from './validation.js';

window.addEventListener("load",function(){
    let email2 = document.getElementById("register_email")
    let email1 = document.getElementById("login_email")
    let f_name = document.getElementById("f_name")
    let l_name = document.getElementById("l_name")
    let phone = document.getElementById("phone")
    let pass1 = document.getElementById("login_password");
    let pass2 = document.getElementById("register_password");
    let pass3 = document.getElementById("confirm_password");
    let login = this.document.getElementById("login_form");
    let register = this.document.getElementById("register_from");

    $("#togglebtn1").click(function(event){
        event.preventDefault();
        pass1.type = pass1.type === "password" ? "text" :"password";
        $("#toggleIcon1").toggleClass("bi-eye bi-eye-slash");
        console.log("atia")
    });//toggle pass for login

    $("#togglebtn2").click(function(event){
        event.preventDefault();
        pass2.type = pass2.type === "password" ? "text" : "password";
        $("#toggleIcon2").toggleClass("bi-eye bi-eye-slash");
        console.log("atia")
    });//toggle pass for register

    $("#togglebtn3").click(function(event){
        event.preventDefault();
        pass3.type = pass3.type === "password" ? "text" : "password";
        $("#toggleIcon3").toggleClass("bi-eye bi-eye-slash");
        console.log("atia")
    });// end of confirm pass 
    // $("#btn1").click(function(){
    //     login.rest();
    // })
    // $("#btn2").click(function(){
    //     register.rest();
    // })
    login.addEventListener("submit", function(event) {
        let v1 = validation.password(pass1.value);
        let v4 = validation.Email(email1.value);
        validation.clearErrors();
        let isValid = true;
        if (!v4){
            validation.showError(email1, 'Invalid login email');
            email1.focus();
            isValid = false;
        }
        if (!v1) {
            validation.showError(pass1, 'Invalid login password');
            pass1.focus();
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault();
        }
        if (isValid) {
            login.reset();
        }
    });//end of login form
    register.addEventListener("submit",function(event){
        event.preventDefault();
        let v2 = validation.password(pass2.value);
        let v3 = validation.confirm(pass2.value,pass3.value);
        let v5 = validation.phone(phone.value);
        let v6 = validation.strings(f_name.value);
        let v7 = validation.strings(l_name.value);
        let v8 = validation.Email(email2.value);
        validation.clearErrors();
        let isValid = true;
        if (!v6) {
            validation.showError(f_name, 'Invalid first name');
            isValid = false;
        }
        if (!v7) {
            validation.showError(l_name, 'Invalid last name');
            isValid = false;
        }
        if (!v8) {
            validation.showError(email2, 'Invalid register email');
            isValid = false;
        }
        if (!v2) {
            validation.showError(pass2, 'Invalid register password');
            isValid = false;
        }
        if (!v3) {
            validation.showError(pass3, 'Passwords do not match');
            isValid = false;
        }
        if (!v5) {
            validation.showError(phone, 'Invalid phone number');
            isValid = false;
        }
        if(!isValid){
            
            return
        }
        let formdata = new FormData(register);
        fetch("/register/",{
            method:"POST",
            body:formdata,
            headers:{
                "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value
            },
        })
        .then(Response=>{
            console.log(Response);
            return Response.json();
            
        })
        .then(data=>{
            if (data.success) {
                console.log(data)
                alert("Registration successful!");
                register.reset();
                $("#register_modal").modal("hide");
            } else {
                alert("Registration failed: " + data.message);
            }
        })
        .catch(console.error("Error:",error));
        

    });//end of regisration form 
              
    
});//end of load