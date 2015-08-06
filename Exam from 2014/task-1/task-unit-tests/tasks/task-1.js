function solve() {
    return function (selector, items) {

        var container = document.querySelector(selector),
            leftDiv = document.createElement('div'),
            rightDiv = document.createElement('div'),
            bigImage = document.createElement('img'),
            bigTitle = document.createElement('h1');

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

        //generate objects
        var html = '<div id="aside">';
        for (var i = 0, itemsLen = items.length; i < itemsLen; i += 1) {
            html += '<div class="image-container">';
            html += '<h1>' + items[i].title + '</h1>';
            html += '<img src="' + items[i].url + '" width="190">';
            html += '</div>';
        }
        html+='</div>';
        rightDiv.innerHTML += '<input id="input"/>' + html;

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

        var asideDiv = document.getElementById('aside');
        asideDiv.style.overflow = 'scroll';
        asideDiv.style.height = '450px';

        asideDiv.addEventListener('click', function (ev) {
            var target = ev.target;
            if(target.tagName === 'IMG'){
                bigImage.src = target.src;
                bigTitle.innerHTML = target.previousElementSibling.innerText;
            }
        },false);
        
        asideDiv.addEventListener('mouseover', function (ev) {
            var target = ev.target;
            if(target.tagName === 'IMG' || target.tagName === 'DIV'){
                target.parentElement.style.backgroundColor = '#d3d3d3';
            }
        },false);

        asideDiv.addEventListener('mouseout', function (ev) {
            var target = ev.target;
            if(target.tagName === 'IMG'){
                target.parentElement.style.backgroundColor = 'white';
            }
        },false);
        
        var input = document.getElementById('input');
        input.addEventListener('input', function () { //does not work as expected
            var text = this.value;
            for (var i = 0,len = imageDivs.length; i < len; i += 1) {
                if((titles[i].innerHTML.toLowerCase()).indexOf(text.toLowerCase()) < 0){
                    imageDivs[i].style.display = 'none';
                    titles[i].style.display = 'none';

                } else {
                    imageDivs[i].style.display = 'block';
                    titles[i].style.display = 'block';
                }
            }
        });
    };
}

module.exports = solve;
