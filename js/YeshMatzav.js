/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


   //jQuery.noConflict();    
$(document).ready(function(){
  //var $tabs = $('#tabs').tabs(); 
  // var current_promo = 1;
     //$("#sss").click(function(){
   // $("#Process").removeClass("q");

    //$("#Process").toggleClass("abcd");
   // $( "#Process" ).appendChild("#abcd");
     //$("#Process").replaceWith( $( "#abcd" ) );
      //$tabs.tabs('select', 2);
     //return true;
  // $("#a").live('click',function(){ 
    //$(function() {
    //$( "#tabs" ).tabs("option", "active", 2 );
 // });
       
   // jQuery.noConflict();    
        $("#a").click(function() {
      //  jQuery.noConflict();
       $('#tabs').tabs();
        });

    



  });


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Drop Down(Map options)
$(document).ready(function(){
  $(".dropdownbox").click(function(){
    $(".menu").toggleClass("showMenu");
      $(".menu > li").click(function(){
        $(".dropdownbox > p").text($(this).text());
        $(".menu").removeClass("showMenu");
      });
  });
  
});
