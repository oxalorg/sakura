(function() {
    'use strict';

    var stylesheet = window.document.createElement('link');

    stylesheet.addEventListener('error', onError);
    stylesheet.addEventListener('load', onSuccess);

    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', 'https://unpkg.com/sakura.css/css/sakura.css');

    window.document.head.appendChild(stylesheet);

    function $(selector) {
        return Array.prototype.slice.call(window.document.querySelectorAll(selector));
    }

    function onError() {
        alert('Sorry, sakura styles could not be applied to this page.');
    }

    function onSuccess() {
        var stylesheets = $('link').filter(function(link) {
            return link.getAttribute('rel') === 'stylesheet' && link !== stylesheet;
        });
        var styles = $('style');
        var stylingElements = stylesheets.concat(styles);

        stylingElements.forEach(function(element) {
            element.parentElement.removeChild(element);
        });
    }
})();