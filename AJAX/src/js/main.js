let animate = document.querySelectorAll('.animate');

function showScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i < animate.length; i++){
        let animatedHeight = animate[i].offsetTop;
        if(animatedHeight - 500 < scrollTop){
            animate[i].style.opacity = 1;
            animate[i].classList.add("showAbove");
        }
    }
}
window.addEventListener('scroll',showScroll);


/*slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}