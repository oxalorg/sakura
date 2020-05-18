# [sakura](https://oxal.org/projects/sakura): a minimal ***classless*** css *framework* / **theme**.

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/sakura.css.svg?colorB=982c61
[npm-url]: https://www.npmjs.com/package/sakura.css

[Go to [Github repository](https://github.com/oxalorg/sakura)]

![The cherry blossoms](sakura160.jpg)

> The perfect blossom is a rare thing. You could spend your life looking for one, and it would not be a wasted life

Just drop in `sakura.css` to any webpage and go from
ugly looking 1900's website to a pretty modern website
in literally 0 seconds.

Easy to customize and build on top of sakura.

Sakura supports extremely easy theming support using
variables for duotone color scheming. Comes with several
existing themes, can be found in the `css` folder of this
repository.

## Demo

Compare a live page **WITH** and **WITHOUT** sakura.

* [https://oxal.org/projects/sakura/demo](https://oxal.org/projects/sakura/demo)

Also my blog is a nice place to check sakura in action with heavy text (it has a change theme button on the top as well):

* [oxal.org/blog](https://oxal.org/blog/)

## Bookmark

Don't want to develop using sakura, but instead want to use it
on websites with outdated 90's design (i.e. no css)?

If so, enable sakura on any website using the following
instructions:

* [https://oxal.org/projects/sakura/bookmark](https://oxal.org/projects/sakura/bookmark)

## Why? - Reasons to use sakura

How exactly does sakura help you? I had a discussion about this on
the [reddit thread](https://www.reddit.com/r/webdev/comments/68zpdp/sakura_a_minimal_classless_css_theme_just_drop_it/)

- Just drop in, even on existing HTML content, to get a pretty
  looking website (everything *"just works"*)
- Quick prototyping, especially when working on backend sites
  and can't yet be bothered to fidget with css/html
- Building a quick (but pretty) site/blog for your best friend or aunt!
- No need to remember tons of different class names for every
  other css framework
- Works amazingly with markdown generated HTML pages (eliminates
  the need of hacks like including `.img img-responsive` in
  markdown-parser generated `<img></img>` tags
- Wonderful for people not really good or interested with
  design as sakura is nothing but a set of reasonable defaults

## Installation

**Manually** (*recommended*):

1. Download the file:

    ```bash
    wget "https://raw.githubusercontent.com/oxalorg/sakura/master/css/sakura.css"
    ```

    **OR** download directly:
    [sakura.css](https://raw.githubusercontent.com/oxalorg/sakura/master/css/sakura.css)

2. Link it from html:

    ```html
    <link rel="stylesheet" href="sakura.css" type="text/css">
    ```

**CDN**:

1. Simply add this in your `<head>` tag.

    ```html
    <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura.css" type="text/css">
    ```

**Package Manager**:

1. Install from npm:

    ```bash
    npm install sakura.css
    ```

2. Install from Yarn:

    ```bash
    yarn add sakura.css
    ```

**(Optional)** *but recommended* to use
[normalize.css](https://github.com/necolas/normalize.css/)
to reset *before* using sakura.

## Sites using Sakura

* [https://www.softwareyoga.com/](https://www.softwareyoga.com)
* [https://www.taazakitchen.com/](https://www.taazakitchen.com)
* [http://computableverse.com](http://computableverse.com)
* [http://owlofathena.com](http://owlofathena.com)
* [https://audioviz.surge.sh/vex.html](https://audioviz.surge.sh/vex.html)
* [https://chocopy.org](https://chocopy.org)
* [https://wasmbyexample.dev/](https://wasmbyexample.dev/)
* [https://ninjas.cl/](https://ninjas.cl/)
* [https://minidown.atusy.net](https://minidown.atusy.net)

***If you're using sakura, please let me know or make a pull
request adding in your name. I would be super happy!! `^_^`***

## Theming

You can make your own themes by overriding some variables for
colors.

Here is an example file: `./scss/sakura-earthly.scss`:

```scss
/* Duotone color scheming:
   Uses blossom as the revealing/stark color
   Uses fade as the more prominent color
*/
$color-blossom: #338618;
$color-fade: #5e5e5e;

/* bg color is used for the background of the page
   bg-alt is used for code-blocks etc
*/
$color-bg: #f9f9f9;
$color-bg-alt: #C7E3BE;

/* color of all the text on the page */
$color-text: #4a4a4a;
$font-size-base: 1.8rem;

@import "main";
```

## Contributing

Please have a look at the [instructions](CONTRIBUTING.md).

## Contributors

* Bookmarklet was added by [Zhouzi](https://github.com/Zhouzi)
* The image is credited to
[Deedster](https://pixabay.com/en/users/Deedster-2541644/)

## Share some <3

> Between our two lives there is also the life of the cherry
> blossom. - *Basho Matsuo*

Please leave a star :)
