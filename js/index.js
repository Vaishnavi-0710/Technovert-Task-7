let curIndex=0, images = [];
images = [
    {
        url: "../images/img1.jpg",
        alt: "img not found"
    },
    {
        url: "../images/img2.jpg",
        alt: "img not found"
    },
    {
        url: "../images/img3.jpg",
        alt: "img not found"
    },
    {
        url: "../images/img4.jpg",
        alt: "img not found"
    },
    {
        url: "../images/img5.jpg",
        alt: "img not found"
    }
]

list = "";
dotList="";
i=0;
images.forEach((image) => {
    list += `<div class="slide"><img class="image" src="${image.url}" alt="${image.alt}"> </div>`;
    dotList+=`<div class="dot" onclick="currentSlide(${i})"></div>`;
    i++;
});
let slideshowContainer = document.getElementById("slideshowContainer");
slideshowContainer.innerHTML = list;
let dots=document.getElementById("dots");
dots.innerHTML=dotList;
let carouselContainer=document.getElementById("carouselContainer");
setInterval(function(){
    curIndex=(curIndex+1)%images.length;
    let slideshowContainer = document.getElementById("slideshowContainer");
    slideshowContainer.style.transform=`translateX(-${carouselContainer.clientWidth*curIndex}px)`
    slideshowContainer.style.transition=`transform 0.5s`;
},3000);

function pushSlides(n){
    if(curIndex<0){curIndex=images.length-1;}
    else{curIndex=(curIndex+n)%images.length;}
    let slideshowContainer = document.getElementById("slideshowContainer");
    slideshowContainer.style.transform=`translateX(-${carouselContainer.clientWidth*curIndex}px)`
}