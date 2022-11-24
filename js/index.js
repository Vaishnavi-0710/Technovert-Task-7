let nextIndex,curIndex=0,images=[];
images=[
    {
        url: "../images/img1.jfif",
        alt: "img not found"
    },
    {
        url: "../images/img2.jfif",
        alt: "img not found"
    },
    {
        url: "../images/img3.jfif",
        alt: "img not found"
    },
    {
        url: "../images/img4.jfif",
        alt: "img not found"
    },
    {
        url: "../images/img5.jfif",
        alt: "img not found"
    }
]
$(document).ready(function(){
    addimages();
    // $(".prev").click(function(e){
    //     e.preventDefault();
    // });
});

function addimages(){
    list="";
    dotList="";
    i=0;
    images.forEach((image)=>{
        list+=`<div class="slide fade"><img class="images" src="${image.url}" alt="${image.alt}"> </div>`;
        dotList+=`<span class="dot" onclick="currentSlide(${i})"></span>`;
        i++
    });
    // list+=`<a class="prev" onclick="">`+ &#10094; + `</a>
    //     <a class="next" onclick="">`+ &#10095; + `</a>`;
    let slideshowContainer=document.getElementById("slideshowContainer");
    slideshowContainer.innerHTML=list;
    let more=document.getElementById("more");
    more.innerHTML=dotList;

    

}


