//Image slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
  if (slideIndex === 1) {
    $(".slideshow-text h3").text("IT Support and Service");
  } else if (slideIndex === 2) {
    $(".slideshow-text h3").text("Corporate Training");
  } else {
    $(".slideshow-text h3").text("Outsourcing");
  }
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//Footer
function footerSubscribe() {
  var x = document.getElementById("footer-email");
  if (x.value != "") {
    x.style.border = "5px solid green";
  } else {
    x.style.border = "3px solid red";
  }
}

$(document).ready(function () {
  $(".menu-gallery h4").eq(0).css("background-color", "#c81010");
  $(".menu-gallery h4").eq(1).css("background-color", "#005880");
  $(".menu-gallery h4").eq(2).css("background-color", "#e4a701");
  $(".menu-gallery h4").eq(3).css("background-color", "#00b5a6");
  var windowWidth = $(window).width();
  $("#footer-social-header").text(
    windowWidth < 450 ? "Socials" : "Connect with us on our Socials!"
  );
});
