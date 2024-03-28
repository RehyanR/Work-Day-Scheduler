$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});

for (var hour = 9; hour <= 17; hour++) {
  var timeBlock = $("<div>").addClass("row time-block").attr("data-hour", hour);
  var hourCol = $("<div>")
    .addClass("col-1 hour")
    .text(dayjs().hour(hour).format("hA"));
  var textArea = $("<textarea>")
    .addClass("col-10 description")
    .addClass(getTimeBlockClass(hour));
  var saveBtn = $("<button>")
    .addClass("col-1 saveBtn")
    .html('<i class="fas fa-save"></i>');
}

function getLocalStorageKey(hour) {
  return "event_" + dayjs().format("YYYY-MM-DD") + "_" + hour;
}
