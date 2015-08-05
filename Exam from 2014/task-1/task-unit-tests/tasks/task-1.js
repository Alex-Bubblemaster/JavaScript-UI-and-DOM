/* globals module */
function solve(selector, items) {
 var container = document.querySelector(selector),
     leftDiv = document.createElement('div'),
     rightDiv = document.createElement('div'),
     bigImage = document.createElement('img');

    //left div image preview

    leftDiv.className += ' image-preview';
    bigImage.src = items[0].url;
    leftDiv.appendChild(bigImage);








    container.appendChild(leftDiv);
    container.appendChild(rightDiv);
}

module.exports = solve;