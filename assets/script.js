$(document).ready(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});



function getLocalStorageKey(hour) {
    return "event_" + dayjs().format("YYYY-MM-DD") + "_" + hour;
  }
