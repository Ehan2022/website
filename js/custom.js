$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5500,
  arrows: false,
  dots: false,
  pauseOnHover: false
});
$('.slide_main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots:false,
  nextArrow:".prev",
  prevArrow:".next",
  centerMode: true,
  centerPadding: '0px',
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#scroll-top').fadeIn();
  } else {
    $('#scroll-top').fadeOut();
  }
});

$('#scroll-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
//read more
function myFunctioni() {
  var dots = document.getElementById("dotsi");
  var moreText = document.getElementById("morei");
  var btnText = document.getElementById("myBtni");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunctionn() {
  var dots = document.getElementById("dotsn");
  var moreText = document.getElementById("moren");
  var btnText = document.getElementById("myBtnn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunctions() {
  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("mores");
  var btnText = document.getElementById("myBtns");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunctiony() {
  var dots = document.getElementById("dotsy");
  var moreText = document.getElementById("morey");
  var btnText = document.getElementById("myBtny");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}