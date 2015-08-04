function solve() {
    return function () {
        $.fn.listview = function (data) {
            var $this = $(this),
                bookListItems = $('#' + $this.attr('data-template')).html(),
                template = handlebars.compile(bookListItems),
                dataLen = data.length;

            for (var i = 0; i < dataLen; i += 1) {
                $this.append(template(data[i]));
            }
        };
        return this;
    };
}

module.exports = solve;