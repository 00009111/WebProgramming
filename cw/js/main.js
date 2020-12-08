var navToggle = document.getElementsByClassName("nav-toggle")[0];
var aside = document.getElementsByClassName("aside")[0];

navToggle.addEventListener("click", function(){
    aside.classList.toggle("open");
    console.log("I am listening ")
})