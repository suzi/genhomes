import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
//require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

// Custom / components below

// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show('1000');
  } else {
    $(".filter-simple-item").not('.'+value).hide('3000');
    $('.filter-simple-item').filter('.'+value).show('3000');
  }
});

// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});

// Patch for a Bug in v6.3.1
$(window).on('changed.zf.mediaquery', function() {
  $('.is-dropdown-submenu.invisible').removeClass('invisible');
});

// content top offset
/*
var $stickyBar = $('body').find('.menubar-container');
var $stickyHeight = $('body').find('.menubar-container').height() + 'px';
var $siteContent = $('body').find('.site-content');
console.log($siteContent.length);
if ($stickyBar.length && $siteContent.length) {
  //$siteContent.css({marginTop: $stickyHeight})
  $(window).on('resize', function(e){
    // Do responsive stuff
      //$siteContent.css({marginTop: $stickyHeight})
  });
}
*/

$('.image-gallery').each(function() {
  var $mainImg = $(this);
  var elem = $mainImg.find('.gallery-main-image');

  $('.gallery-thumb').on('click', function (e) {
    e.preventDefault;
    elem.attr('src', $(this).data('image'));
    Foundation.Motion.animateIn(elem, 'fade-in');
  })

});


// residential galleries

