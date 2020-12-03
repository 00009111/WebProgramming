
const content = document.getElementsByClassName("blog")[0].innerHTML;


  document.querySelectorAll('.blog-box').forEach(function(e) {
    e.addEventListener('click', function() {
        
        var area = document.getElementById("area");
        area.innerHTML= this.innerHTML;
        
        
        var linkToText = document.getElementsByClassName("read-more")[0];
        var dateLabel = document.getElementsByClassName("blog-date")[0];
        var iconsLabel = document.getElementsByClassName("blog-icons")[0];
        var fullText = document.getElementsByClassName("invisible")[0];
        var resetBtn = document.getElementsByClassName("return")[0];

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
  
    
   