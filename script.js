$(document).ready(function () {
  AOS.init({
    duration: 800,
    once: true,
  });

  var options = {
    strings: [
      "Find the best movie recommendations on this site.",
      "Explore genres like Action, Drama, and Horror.",
      "Discover your next favorite film.",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
  };
  var typed = new Typed("#typing-subtitle", options);

  $(".film-card").tilt({
    maxTilt: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 400,
    glare: true,
    maxGlare: 0.5,
  });

  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });

  $("form").submit(function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    $(this).trigger("reset");
  });

  $('.scroll-btn').on('click', function() {
    let carousel = $(this).siblings('.movie-carousel');
    let scrollAmount = carousel.width() * 0.8; 

    if ($(this).hasClass('left')) {
      carousel.animate({
        scrollLeft: "-=" + scrollAmount
      }, 500); 
    } else {
      carousel.animate({
        scrollLeft: "+=" + scrollAmount
      }, 500);
    }
  });

  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    $("section").each(function () {
      if (scroll >= $(this).offset().top - 150) {
        let id = $(this).attr("id");
        if ($('.nav-link[href="#' + id + '"]').not(".active")) {
          $(".nav-link").removeClass("active");
          $('.nav-link[href="#' + id + '"]').addClass("active");
        }
      }
    });
  });
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = function () {
  window.scrollTo(0, 0);
};