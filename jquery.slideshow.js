/*!
 * ‘Simplest jQuery Slideshow’ – http://snook.ca/archives/javascript/simplest-jquery-slideshow
 * Script by Jonathan Snook – http://snook.ca/
 * Pluginified by Mathias Bynens – http://mathiasbynens.be/
 * …and Michael Eichelsdörfer – http://www.michael-eichelsdoerfer.de/
 */
;(function($) {
 $.fn.slideShow = function(settings) {
  // Specify default settings
  var config = {
   'timeOut': 3000,
   'speed': 400 // 'normal'
  };
  // Use custom settings, if any
  if (settings) {
   $.extend(config, settings);
  };
  // We loop through the selected elements, in case the slideshow was called on more than one element, e.g. `$('.foo, .bar').slideShow();`
  this.each(function() {
   // Inside the setInterval() block, `this` references the window object
   // (instead of the slideshow container), so we store it inside a var
   var $elem = $(this);
   // Hide all slides except the first one
   $elem.children(':gt(0)').hide(); // $elem.children().slice(1).hide(); would work as well, but is 1 byte longer
   // Iterate through the slides
   setInterval(function() {
    $elem.children().eq(0)
     // Fade out the current slide
     .fadeOut(config.speed)
     // Fade in the next slide
     .next().fadeIn(config.speed)
    // Append the current slide to the end of the stack
    .end().appendTo($elem);
   }, config.timeOut);
  });
  // Allow chaining
  return this;
 };
})(jQuery);