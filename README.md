# Simplest jQuery Slideshow Plugin

This plugin was based on [Jonathan Snook’s Simplest jQuery Slideshow script](http://snook.ca/archives/javascript/simplest-jquery-slideshow). All I did was take that script, optimize it a little, and wrap it in a plugin.

## Demo & Examples

[http://mathiasbynens.be/examples/slideshow](http://mathiasbynens.be/examples/slideshow)

## Example Usage

### Simple

    $('.slideshow').slideShow();

### Specifying parameters

    $('.slideshow').slideShow({ timeout: 2000, speed: 300 });

### Multiple slideshows in one go

    $('.slideshow, .other-slideshow').slideShow();

## Avoiding flashing / flickering images on first load


Put this in the `<head>` element of your HTML document:

    <script>
     document.documentElement.className += 'js';
    </script>

This will instantly add the class `js` to the root element of your document, i.e. `<html>`. (You can [read more about avoiding the FOUC](http://paulirish.com/2009/avoiding-the-fouc-v3/) if you like.)

Now that we can specifically target users with JavaScript enabled, it’s easy to hide all slideshow elements through CSS – until the plugin makes them visible again, that is.

    .js .slideshow li { display: none; }

The first slideshow element, however, can still be visible:

    .js .slideshow li:first-child { display: block; }

By using this one little line of JavaScript and two lines of CSS, slideshow flickering is successfully avoided!

## Credits

Kudos to [Jonathan Snook](http://snook.ca/) for the original script and [Michael Eichelsdörfer](http://www.michael-eichelsdoerfer.de/) and [Christian Fleschhut](http://christianfleschhut.de/) for some plugin tips and ideas.

_– [Mathias](http://mathiasbynens.be/)_