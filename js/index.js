let curIndex = 0, images = [];
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
images.forEach((image) => {
    list += `<div class="slide"><img class="image" src="${image.url}" alt="${image.alt}"> </div>`;
});
let slideshowContainer = document.getElementById("slideshowContainer");
slideshowContainer.innerHTML = list;
let carouselContainer = document.getElementById("carouselContainer");
setInterval(function () {
    curIndex = (curIndex + 1) % images.length;
    let slideshowContainer = document.getElementById("slideshowContainer");
    slideshowContainer.style.transform = `translateX(-${carouselContainer.clientWidth * curIndex}px)`
}, 3000);

function pushSlides(n) {
    if(n>0 || curIndex!=0) {
        curIndex = (curIndex + n) % images.length;
    } else {
        curIndex = images.length-1;
    }
    slideshowContainer.style.transform = `translateX(-${carouselContainer.clientWidth * curIndex}px)`;
}
