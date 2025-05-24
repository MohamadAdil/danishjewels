$(document).ready(function () {
  // Handle click events on navigation links
  $(".site-header .navbar-nav .nav-link").on("click", function (event) {
    // Prevent default behavior of anchor links
    event.preventDefault();

    // Remove 'active' class from all nav links
    $(".site-header .navbar-nav .nav-link").removeClass("active");

    // Add 'active' class to the clicked nav link
    $(this).addClass("active");

    // Handle smooth scrolling to the section
    const href = $(this).attr("href");
    if (href.startsWith("#")) {
      $(href).get(0).scrollIntoView({ behavior: "smooth" });
    }
  });

  // Initialize Owl Carousel for service slides
 
    $(".service-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 1000,
      navText: [
        "<span class='prev'><i class='fa-solid fa-arrow-left-long'></i></span>",
        "<span class='next'><i class='fa-solid fa-arrow-right-long'></i></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  });
  
