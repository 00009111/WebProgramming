var items = document.querySelectorAll(".grid-box:not(.none)");
var totalItems = items.length;
const slideshowBox = document.getElementsByClassName("slideshow")[0];
var slideshowImage = document.getElementById("slideshow-image");
var captionCounter = document.getElementsByClassName("caption-counter")[0];
var closeSlideshow = document.getElementsByClassName("slideshow-close")[0];
var prevItem = document.getElementsByClassName("prev-item")[0];
var nextItem = document.getElementsByClassName("next-item")[0];

console.log(items);
console.log(slideshowImage.innerHTML);
console.log(items[0].children[0].src);

function imageshowing(num){
    var total = document.querySelectorAll(`.grid-box:not(.none)`).length;
    var imgSrc = items[num].children[0].src
    slideshowBox.classList.remove("none");
    slideshowImage.innerHTML = "<img src='"+imgSrc+"' />";
    console.log(num);
    console.log(total-1);
    if (num<=total-1){
        count=num+1;
    }else{
        count= num-total+1;
    }
    
    captionCounter.innerHTML = count +" of "+ total;
}

    for(let i=0; i<totalItems; i++){
    items[i].addEventListener("click", function(){
        imageshowing(i)
    })
    
}

closeSlideshow.addEventListener("click", function(){
    slideshowBox.classList.add("none");
})
prevItem.addEventListener("click", function(){
    count=count-2;
    if(count>=0){
        imageshowing(count);
    }
    else{
        imageshowing(document.querySelectorAll(`.grid-box:not(.none)`).length -1)
    }
    
})
console.log(document.querySelectorAll(`.grid-box:not(.none)`).length)
nextItem.addEventListener("click", function(){
    if(count<=document.querySelectorAll(`.grid-box:not(.none)`).length-1){
        imageshowing(count);
    }
    else{
        console.log(imageshowing(0))
    }
    
})