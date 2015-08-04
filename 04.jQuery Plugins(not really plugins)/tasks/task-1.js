function solve() {
    return function (selector) {
        var $selectedList = $(selector).hide(),
            options = $('option'),
            dropDownItems = '';

        $selectedList.wrap($('<div class="dropdown-list"></div>'));
        var dropDownList = $('.dropdown-list');

        var currentDiv = $('<div class="current" data-value="">Option 1</div>');
        currentDiv.appendTo(dropDownList);

        var optionsContainer = $('<div class="options-container"></div>').css({'position':'absolute', 'display': 'none'});

        for (i = 0;len = options.length, i < len; i += 1) {
            dropDownItems += $('<div class="dropdown-item"></div>')
                .attr('data-value',options[i].value)
                .attr('data-index', i)
                .text('Option ' +(i + 1))
                .appendTo(optionsContainer);
        }

        optionsContainer.appendTo(dropDownList);

        currentDiv.on('click', function () {
            optionsContainer.toggle();
        });
        
    }
}

module.exports = solve;