/* globals $ */

/*
 Create a function that takes a selector and:
 * Finds all elements with class `button` or `content` within the provided element
 * Change the content of all `.button` elements with "hide"
 * When a `.button` is clicked:
 * Find the topmost `.content` element, that is before another `.button` and:
 * If the `.content` is visible:
 * Hide the `.content`
 * Change the content of the `.button` to "show"
 * If the `.content` is hidden:
 * Show the `.content`
 * Change the content of the `.button` to "hide"
 * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
 * Throws if:
 * The provided ID is not a **jQuery object** or a `string`

 */
function solve() {
    return function (selector) {

        if ($(selector).length === 0 || typeof selector !== 'string') {
            throw new Error('Selector should be either a string or a jquery object');
        }

        $('.button').text('hide').on('click', toggleState);

        function toggleState() {
            var $nextSibling = $(this).next();
            while ($nextSibling && !$nextSibling.hasClass('button')) {
                if ($nextSibling.hasClass('content')) {
                    if ($nextSibling.css('display') === 'none') {
                        $(this).text('hide');
                        $nextSibling.show(); //css('display', '');
                    } else {
                        $nextSibling.css('display', 'none'); //.hide() or toggle() does not work here
                        $(this).text('show');
                    }
                    break;
                }
                $nextSibling = $nextSibling.next();
            }
        }
    }
}
module.exports = solve;