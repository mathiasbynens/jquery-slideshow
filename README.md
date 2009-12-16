# Simplest jQuery Slideshow Plugin

This plugin was based on [Jonathan Snook’s Simplest jQuery Slideshow script](http://snook.ca/archives/javascript/simplest-jquery-slideshow). All I did was take that script, optimize it a little, and wrap it in a plugin.

## Demo & Examples

[http://mathiasbynens.be/examples/slideshow](http://mathiasbynens.be/examples/slideshow)

## Example Usage

### Simple

    $('.slideshow').slideshow();

### Specifying parameters

    $('.slideshow').slideshow({ timeout: 2000, speed: 300 });

### Multiple slideshows in one go

    $('.slideshow, .other-slideshow').slideshow();

## Avoiding flashing / flickering slides on first load

If you’re using `position: absolute` to place the slides on top of each other, the first slide you’ll see is in fact the _last_ slide in the HTML. Users without JavaScript enabled will _only_ see this slide.

However, as soon as `.slideshow()` is invoked, the slideshow will start at slide 1, which is the _first_ slide in the HTML.

To prevent users from seeing the last slide before the plugin is loaded, and to prevent users without JavaScript from seeing the last slide instead of the first slide in the markup, you can use CSS.

The following line of CSS hides all slideshow elements through CSS – until the plugin makes them visible again, that is.

    .slideshow li { display: none; }

The first slideshow element, however, can still be visible:

    .slideshow li:first-child { display: block; }

Sadly, this won’t work on IE6, since this browser doesn’t support the `:first-child` pseudo-class. If you want to support IE6 as well, you could add a `first-child` class to the first slideshow element, and then use something like the following:

    .slideshow li:first-child, .slideshow li.first-child { display: block; }

By using these two two lines of CSS, slideshow flickering is successfully avoided!

## Credits

Kudos to [Jonathan Snook](http://snook.ca/) for the original script and [Michael Eichelsdörfer](http://www.michael-eichelsdoerfer.de/) and [Christian Fleschhut](http://christianfleschhut.de/) for some plugin tips and ideas.

_– [Mathias](http://mathiasbynens.be/)_