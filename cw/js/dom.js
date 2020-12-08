



  document.querySelectorAll('.blog-box').forEach(function(e) {
    e.addEventListener('click', function() {
        
        var area = document.getElementById("area");
        area.innerHTML= this.innerHTML;
        
        
        var linkToText = document.getElementsByClassName("read-more")[0];
        var dateLabel = document.getElementsByClassName("blog-date")[0];
        var iconsLabel = document.getElementsByClassName("blog-icons")[0];
        var fullText = document.getElementsByClassName("invisible")[0];

        linkToText.style.display = "none";
        fullText.style.display = 'inline';
        dateLabel.style.display = "none";
        iconsLabel.style.display = "inline";

        
         });
        document.getElementsByClassName("fa-heart")[0].addEventListener('click', function() {
        if(this.style.color=="red"){//if color red, it chanes to red
            this.style.color = "rgb(119, 116, 116)";//Changes the color of .this (clicked icon)
        }
        else{
            this.style.color="red"//if color is white, it changes to red  
        }
      
    })
        });
  
    
   //DOM events and JS functions for Portfolio page

   var itemAll = document.getElementById("i-all");
   var itemWeb = document.getElementById("i-web");
   var itemPhoto = document.getElementById("i-photo");

   itemAll.addEventListener("click", function(){
       if (itemAll.classList.contains("p-active")){
           return;
       }
       else {
           itemPhoto.classList.remove("p-active")
           itemWeb.classList.remove("p-active")
           itemAll.classList.add("p-active")
           
           document.querySelectorAll('.grid-box').forEach(function(e){
               if(e.classList.contains("none")){
                   e.classList.remove("none")
               }
            
           })
       }
   })

    function webDPage(){
    
        itemPhoto.classList.remove("p-active");
        itemAll.classList.remove("p-active");
        itemWeb.classList.add("p-active");
        
        document.querySelectorAll('.web-d').forEach(function(e){
            if(e.classList.contains("none")){
                e.classList.remove("none");
            }
         
        })
        document.querySelectorAll('.photo-d').forEach(function(e){
            e.classList.add('none');
        })
    
    }

    function photoPage(){
        itemWeb.classList.remove("p-active");
        itemAll.classList.remove("p-active");
        itemPhoto.classList.add("p-active");
        
        document.querySelectorAll('.photo-d').forEach(function(e){
            if(e.classList.contains("none")){
                e.classList.remove("none");
            }
         
        })
        document.querySelectorAll('.web-d').forEach(function(e){
            e.classList.add('none');
        })
    }

