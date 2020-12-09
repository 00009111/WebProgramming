//Navigation toggle
var navToggle = document.getElementsByClassName("nav-toggle")[0];
var aside = document.getElementsByClassName("aside")[0];

navToggle.addEventListener("click", function(){
    aside.classList.toggle("open");
    //when toggle is clicked it opens/closed aside
})
