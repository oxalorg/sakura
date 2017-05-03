# [sakura](https://oxal.org/projects/sakura): a minimal ***classless*** css *framework* / **theme**.

[Go to [Github repository](https://github.com/oxalorg/sakura)]

![The cherry blossoms](sakura160.jpg)

Just drop in `sakura.css` to any webpage and go from
ugly looking 1900's website to a pretty modern website
in literally 0 seconds.

Sakura supports extremely easy theming support using
variables for duotone color scheming.

Comes with several existing themes, can be found in the
`css` folder of this repository.

## Demo

Compare a live page **WITH** and **WITHOUT** sakura.

* https://oxal.org/projects/sakura/demo

## Installation

1. Download the file:

    ```
    wget "https://raw.githubusercontent.com/oxalorg/sakura/master/css/sakura.css"
    ```

    **OR** download directly:
    [sakura.css](https://raw.githubusercontent.com/oxalorg/sakura/master/css/sakura.css)

2. Link it from html:

    ```
    <link rel="stylesheet" href="sakura.css">
    ```

**(Optional)** *but recommended*, use
[normalize.css](https://github.com/necolas/normalize.css/)
to reset before using sakura.

## Sites using Sakura

* http://computableverse.com
* http://owlofathena.com
* http://findyourip.cf

***If you're using sakura, please let me know or make a pull
request adding in your name. I would be super happy!! `^_^`***

## Theming

You can make your own themes by overriding some variables for
colors.

Here is an example file: `./scss/sakura-earthly.scss`:

```
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

## Share some <3

Please leave a star :)
