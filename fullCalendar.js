document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendarElOne = document.getElementById('calendarSideBarOne');
  var calendarElThree = document.getElementById('calendarSideBarThree');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridDay',
    locale: 'es',
  });

  var calendarSideBarOne = new FullCalendar.Calendar(calendarElOne, {
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: '',
      center: '',
      right: ''
    },
  });

  var calendarSideBarThree = new FullCalendar.Calendar(calendarElThree, {
    initialView: 'dayGridMonth',
    locale: 'es',
    headerToolbar: {
      left: '',
      center: '',
      right: ''
    },
  });




  calendar.render();
  calendarSideBarOne.render();
  calendarSideBarThree.render();
});