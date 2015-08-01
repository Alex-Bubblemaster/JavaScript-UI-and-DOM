/* globals $ */

/* 
Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {
    return function (element, contents) {
    var givenElement,
        i,
        len = contents.length,
        content = '';

    if(!element || !contents){
      throw new Error();
    }

    if(!(typeof element === 'string' || element instanceof HTMLElement)){
      throw new Error(givenElement + ' not found');
    } else if (typeof element === 'string'){
      givenElement = document.getElementById(element);
    } else {
      givenElement = element;
    }

    for (i = 0; i < len; i += 1) {
      if(typeof contents[i] !== 'string' && typeof contents[i] !== 'number'){
        throw new Error('Content cannot be a number or string');
      }
    }

    for (i = 0; i < len; i += 1) {
      content +='<div>' + contents[i] + '</div>';
    }

    givenElement.innerHTML = '';
    givenElement.innerHTML += content;
  };
};