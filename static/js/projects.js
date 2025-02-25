import * as validation from './validation.js';
window.addEventListener("load",function(){

    let title = document.getElementById("title");
    let details = document.getElementById("details");
    let s_date = document.getElementById("s_date");
    let e_date = document.getElementById("e_date");
    let cost = document.getElementById("cost");
    let pass1 = document.getElementById("pass");
    let add_project = document.getElementById("p_form");

    $("#p_delete").click(function(){
        $("#m_title").text("Delete_Permission");

    });//end of delete button
    $("#p_update").click(function(){
        $("#m_title").text("Update_Permission");
    });//end of update button
    $("#togglebtn1").click(function(event){
        event.preventDefault();
        pass1.type = pass1.type === "password" ? "text" : "password";
        $("#toggleicon1").toggleClass("bi-eye bi-eye-slash")
    });//end of toggle pass for update

    add_project.addEventListener("submit",function(event){
        let v1 = validation.strings(title.value);
        let v2 = validation.validateAlphaNumeric(details.value);
        let v3 = validation.cost(cost.value);
        let v4 = validation.dates(s_date.value,e_date.value);
        console.log(v1,v2,v3,v4);
        validation.clearErrors();
        let isValid = true;
        if (!v1){
            validation.showError(title,"not valid title only letters");
            isValid=false;
        }
        if (!v2){
            validation.showError(details,"not valid details ");
            isValid=false;
        }
        if (!v3){
            validation.showError(cost,"not valid number");
            isValid=false;
        }
        if (!v4){
            validation.showError(s_date,"not valid date");
            validation.showError(e_date,"e_date must be > s_date !--");
            isValid=false;
        }
        if (!isValid){
            event.preventDefault();
        }
        if (isValid){
           add_project.reset();
        }
    });//end of submit

    $("#list_all").click(function(){
        $("#update").modal("show");
    })


});//end of load 