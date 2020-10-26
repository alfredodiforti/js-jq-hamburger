var hamburger = $('.header-right > a i');
var list = $('.hamburger-menu');

hamburger.click( function() {
   hamburger.removeClass('fas, fa-bars');
   list.show();
});

var x = $('.hamburger-menu > a');
x.click( function() {
  list.hide();
  hamburger.addClass('fas, fa-bars');
})
