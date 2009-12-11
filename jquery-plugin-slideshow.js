/*!
 * ‘Simplest jQuery Slideshow’ – http://snook.ca/archives/javascript/simplest-jquery-slideshow
 * Script by Jonathan Snook – http://snook.ca/
 * Pluginified by Mathias Bynens – http://mathiasbynens.be/
 * …and Michael Eichelsdörfer – http://www.michael-eichelsdoerfer.de/
 */
;(function($) { 
 $.fn.slideShow = function(settings) {
  var config = {
   'timeOut': 3000,
   'speed': 'normal'
  };
  if (settings) {
   $.extend(config, settings);
  };
  this.each(function() {
   var $elem = $(this);
   $elem.children(':gt(0)').hide();
   setInterval(function() {
    $elem.children().eq(0).fadeOut(config.speed).next().fadeIn(config.speed).end().appendTo($elem);
   }, config.timeOut);
  });
  return this;
 };
})(jQuery);