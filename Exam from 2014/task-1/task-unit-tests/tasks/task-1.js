function solve() {
    return function (selector, items) {

        var container = document.querySelector(selector),
            leftDiv = document.createElement('div'),
            rightDiv = document.createElement('div'),
            bigImage = document.createElement('img'),
            bigTitle = document.createElement('h1'),
            input = document.createElement('input');

        //left div image preview
        leftDiv.className += ' image-preview';
        leftDiv.style.float = 'left';
        leftDiv.style.align = 'center';

        bigImage.src = items[0].url;
        bigImage.style.width = '400px';
        bigImage.style.height = '400px';

        bigTitle.innerHTML = items[0].title;
        bigTitle.style.textAlign = 'center';

        leftDiv.appendChild(bigTitle); //without the h1 did not pass the test!
        leftDiv.appendChild(bigImage);



        // right div

        rightDiv.style.display = 'inline-block';
        rightDiv.style.textAlign = 'center';
        rightDiv.style.width = '250px';
        rightDiv.style.height = '450px';
        rightDiv.style.overflow = 'scroll';



        rightDiv.appendChild(input);
        //generate objects
        var html = '';
        for (var i = 0, itemsLen = items.length; i < itemsLen; i += 1) {
            html += '<div class="image-container">';
            html += '<h1>' + items[i].title + '</h1>';
            html += '<img src="' + items[i].url + '" width="190">';
            html += '</div>';
        }
        rightDiv.innerHTML += html;

        container.appendChild(leftDiv);
        container.appendChild(rightDiv);

        var titles = document.getElementsByTagName('h1');
        [].forEach.call(titles, function (title) {
            title.style.textAlign = 'center';
            title.style.fontSize = '18px';
        });

        var imageDivs = document.getElementsByClassName('image-container');
        [].forEach.call(imageDivs, function (imageDiv) {
            imageDiv.style.textAlign = 'center';
        });

        var inputField = document.getElementsByTagName('input');
        inputField.style.position = 'absolute';

    };
}

module.exports = solve;
