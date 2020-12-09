//Navigation toggle
var navToggle = document.getElementsByClassName("nav-toggle")[0];
var aside = document.getElementsByClassName("aside")[0];

navToggle.addEventListener("click", function(){
    aside.classList.toggle("open");
    //when toggle is clicked it opens/closed aside
})


//---------------------------------//
//Form validation in Contac Page
const form = document.getElementById("form");
const submitBtn = document.getElementsByClassName("submit-button")[0];
var fname =document.getElementById("fname");
var email = document.getElementById("lname");
var mSubject = document.getElementById("m-subject");
var mMessage = document.getElementById("m-message");


form.addEventListener("submit", (e)=>{
    let errors = 0;

    //function that will take many arguments and do operations with each of them
    //checks whether given input is not empty or less that 3 characters
    function isNotEmpty(){
        
        for (var i = 0; i < arguments.length; i++) {
             if(arguments[i].value === ""|| arguments[i].value== null){
                 //if empty
            errors+=1
            arguments[i].placeholder = "Fill in this feild!";
            arguments[i].classList.add("error-placeholder");
        }
        else if (arguments[i].value.length<3){
            //if too short
            errors+=1
            arguments[i].placeholder = "Enter a valid input!";
            arguments[i].value="";
            arguments[i].classList.add("error-placeholder");
        }
          }
       
    }
    isNotEmpty(fname, email, mMessage, mSubject);

    //validating email
    //code will run if email is NOT valid
    if(! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)){
        errors+=1;
        email.placeholder = "Enter a valid email";
        email.value=""
        email.classList.add("error-placeholder");
    }
    
    
    //if there are any errors user cannot submit the form
    //if no errors this code will not run
    if(errors >0){
        console.log(errors)
    }
    
})