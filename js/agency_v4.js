(function($) {
  "use strict"; // Start of use strict

  $( "#nominate" ).click(function() {
    // document.getElementById("results").scrollIntoView();
  });

  $( "#vote" ).click(function() {
    // $.confirm({
    //   theme: 'modern',
    //   escapeKey: true,
    //   type: 'red',
    //   title: 'Vote for the 40th',
    //   content: ' <img class="img-fluid" src="img/others/nominate.png" style="max-width:150px;" alt="">'
    //   +'<div>"Leadership is about vision and responsibility, not power." ~ Seth Berkley</div>',
    //   columnClass: 'col-sm-9 col-md-7 col-lg-5',
    //   closeIcon: true,
    //   buttons: {
    //       sportsClub: {
    //           text: "Vote for NUS Students' Sports Club",
    //           btnClass: 'btn-red',
    //           action: function(){
    //             location.href = "https://bit.ly/nusssc40thvote";
    //           }
    //       },
    //       nussuExcoRep: {
    //           text: "Vote for NUSSU Exco Rep (Sports)",
    //           action: function(){
    //             location.href = "https://orgsync.com/140428/forms/369651";
    //           }
    //       },
    //   },
    // });
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length){
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  $("#presidentialCell").css("max-width",$("#financeCell").width());
  $("#nussuExcoRep").css("max-width",$("#financeCell").width());

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100 || $(window).width() < 768) {
      $("#mainNav").addClass("navbar-shrink");
      $(".nav-logo").addClass("shrink-nav-logo");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $(".nav-logo").removeClass("shrink-nav-logo");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
