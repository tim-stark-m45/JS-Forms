
// hide&show paragraph
let closebtn = document.querySelectorAll('button[data-close]');
for (const elem of closebtn) {
    elem.addEventListener('click', function () {
        let id = event.target.getAttribute('data-paragraph');
        let wnd = document.querySelector(id);
        if (wnd.style.display == "none") {
            wnd.style.display = "block";
            elem.innerText = "Title <";
        } else {
            wnd.style.display = "none";
            elem.innerText = "Title >";
        }
    })
}


//Carousel
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
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


// Modal
let mdl = document.getElementById('myModal');
let openbtn = document.getElementById('openBtn');
let clsbtn = document.getElementsByClassName("close")[0];

openbtn.onclick = function () {
    mdl.style.display = 'block';
}

clsbtn.onclick = function () {
    mdl.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == mdl) {
        mdl.style.display = 'none';
    }
}