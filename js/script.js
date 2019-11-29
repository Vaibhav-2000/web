const responsive1 = {
  0:{
    items:1
  },
  320:{
    items:1
  },
  640:{
    items:2
  },
  960:{
    items:3
  }
};

// The belowcode checks if jQuery is imported or not,if imported it works otherwise not
$(document).ready(function (){

// $nav is an Jquery Object
// or var nav = will also work (where "nav" is an jQuery Object)
  $nav=$('.nav');
  $toggleButtonIcon = $(".toggle-button-icon");

// Click event on toggle menu

$toggleButtonIcon.click(function (){

// "toggleClass" will add and remove class mentioned inside on alternative clicks
  $nav.toggleClass("collapse");
});

//To call swl-carousel for blog (other carousel won't work)
$(".owl-carousel").owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  dots:false,
  nav:true,

//the below code changes the by default left & right arrow used for navigation to the mentioned icon (in html)
  navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],

//TO make the carousel responsive just add this by default functionality
responsive: responsive1
});

//CLICK TO MOVE UP
$(".move-up span").click(function (){
  $("html, body").animate({
    scrollTop:0
  },1500);
});

// ASO INSTANCE
AOS.init();

});
