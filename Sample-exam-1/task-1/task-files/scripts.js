var events = [{
    title   : '22 Exam',
    date    : '22',
    hour    : '10:00',
    duration: '60'
}, {
    title   : '9 Exam',
    date    : '9',
    hour    : '10:00',
    duration: '60'
}];

function createCalendar(element, events) {
    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };

    function hasEventToAdd(eventId) {
        for (var i = 0; i < events.length; i += 1) {
            if(+events[i].date === eventId){
                return i;
            }
        }
        return -1;
    }

    var container = document.getElementById(element),
        table = document.createElement('table'),
        rows,
        cols,
        rowsLen = 10,
        colsLen = 7,
        html = '',
        currentDate = new Date(2015, 7, 1),
        colCount = -1,
        eventId =  1;

    for (rows = 0; rows < rowsLen; rows += 1) {
        html += '<tr>';
        for (cols = 0; cols < colsLen; cols += 1) {
            if (!(rows % 2)) {
                html += '<td class="date-container">' + (currentDate).toDateString() + '</td>';
                currentDate = currentDate.addDays(1);

                if (currentDate.getMonth() > 7) {
                    colCount = cols + 1; //when this breaks need to know how many more cells to print on the bottom row
                    break;
                }
            } else {
                var event = hasEventToAdd(eventId);
                if (colCount < 0) {
                    html += '<td class="events-container">' +
                        '<span id="' + eventId + '">';
                        if(event !== -1){
                            html+= events[event].title + ' ' +  events[event].hour + ' ' + events[event].duration;
                        }
                    html+='</span></td>';
                } else {
                    while (colCount) {
                        html += '<td class="events-container">' +
                            '<span id="' + eventId + '">';
                        if(event > -1){
                            html+= events[event].title + ' ' +  events[event].hour + ' ' + events[event].duration;
                        }
                        html+='</span></td>';
                        colCount -= 1;
                    }
                }
                eventId +=1;
            }
        }
        html += '</tr>';
    }

    table.innerHTML += html;
    container.appendChild(table);

    var datesCells = document.getElementsByClassName('date-container'),
        eventsCells = document.getElementsByClassName('events-container');

    [].forEach.call(datesCells, function (dateCell) { //need to use call for array methods with HTML Collections
        dateCell.style.textAlign = 'center';
        dateCell.style.backgroundColor = '#d3d3d3';
        dateCell.style.fontWeight = 'bold';
        dateCell.style.border = '1px solid black';
        dateCell.style.borderCollapse = 'collapse';
    });

    [].forEach.call(eventsCells, function (eventsCell) {
        eventsCell.style.width = '150px';
        eventsCell.style.height = '150px';
        eventsCell.style.border = '1px solid black';
        eventsCell.style.borderCollapse = 'collapse';
    });

    table.style.border = '1px solid black';
    table.style.borderCollapse = 'collapse';
}

createCalendar('calendar-container', events);