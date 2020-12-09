

//JS DOM event for blog page

  document.querySelectorAll('.blog-box').forEach(function(e) {
    e.addEventListener('click', function() { 
        //when click event happens on one of the blogs, this function happens:
        
        var area = document.getElementById("area");
        area.innerHTML= this.innerHTML; //grabbing the div with id Area
        
        
        var linkToText = document.getElementsByClassName("read-more")[0];
        var dateLabel = document.getElementsByClassName("blog-date")[0];
        var fullText = document.getElementsByClassName("invisible")[0];

        linkToText.style.display = "none";//read-more link will not be displayed
        fullText.style.display = 'inline';//invisible content becomes visible
        dateLabel.style.display = "none";//date label will not be

        
         });
       
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

