let index=1;
display(index);

function addSlides(n) {
    display(index+=n);
}

function currentSlide(n) {
    display(index=n);
}

function display(n) {
    let i;
    let slides=document.getElementsByClassName("slide");
    let dots=document.getElementsByClassName("dot");
    if (n>slides.length) {index=1}    
    if (n<1) {index=slides.length}
    for (i = 0; i<slides.length; i++) {
        slides[i].style.display="none";  
    }
    for (i = 0; i<dots.length; i++) {
        dots[i].className=dots[i].className.replace("active", "");
    }
    slides[index-1].style.display="block";  
    dots[index-1].className+=" active";
}