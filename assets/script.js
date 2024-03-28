$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});

for (var hour = 9; hour <= 17; hour++) {
  var timeBlock = $("<div>").addClass("row time-block").attr("data-hour", hour);
}

function getLocalStorageKey(hour) {
  return "event_" + dayjs().format("YYYY-MM-DD") + "_" + hour;
}
