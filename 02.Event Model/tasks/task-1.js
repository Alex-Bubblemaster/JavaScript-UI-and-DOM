/* globals $ */

/* 

Create a function that takes an id or DOM element and:
 If an id is provided, select the element
 Finds all elements with class button or content within the provided element
 Change the content of all .button elements with "hide"
 When a .button is clicked:
 Find the topmost .content element, that is before another .button and:
 If the .content is visible:
 Hide the .content
 Change the content of the .button to "show"
 If the .content is hidden:
 Show the .content
 Change the content of the .button to "hide"
 If there isn't a .content element after the clicked .button and before other .button, do nothing
 Throws if:
 The provided DOM element is non-existant
 The id is either not a string or does not select any DOM element

*/

function solve(){
  return function (selector) {
    var selectedElement;

    if(!(selector instanceof HTMLElement || typeof selector === 'string')){
      throw new Error('Passed argument should be either string or an HTML element!');
    } else if (typeof selector === 'string'){
        selectedElement = document.getElementById(selector);
    } else {
        selectedElement = selector;
    }

    if(selectedElement === null){ //if it was string and invalid ID, it would return null
        throw new Error(selector + 'id does not exist in the DOM tree');
    }

    var btnElements = selectedElement.getElementsByClassName('button'),
        contentElements = selectedElement.getElementsByClassName('content');

      if(btnElements && contentElements){

         [].forEach.call(btnElements, function (btn) { //HTML collection can only be forEached by calling the function like that
             btn.innerHTML = 'hide';
             btn.addEventListener('click', function () {
                 var nextSibling = btn.nextElementSibling;
                 while(nextSibling){
                     if(nextSibling.className === 'button'){
                         break;
                     }
                     if(nextSibling.className === 'content'){
                         if(nextSibling.style.display === 'none'){
                             nextSibling.style.display = '';
                             btn.innerHTML = 'hide';
                         } else {
                             nextSibling.style.display = 'none';
                             btn.innerHTML = 'show';
                         }
                     }

                     nextSibling = nextSibling.nextElementSibling;
                 }
             })
         })
      }
  };
}

module.exports = solve;
