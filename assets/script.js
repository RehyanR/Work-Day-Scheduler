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

  var event = localStorage.getItem(getLocalStorageKey(hour));
  if (event !== null) {
    textArea.val(event);
  }

  saveBtn.click(function () {
    var hour = $(this).parent().data("hour");
    var event = $(this).siblings(".description").val();
    localStorage.setItem(getLocalStorageKey(hour), event);
  });

  timeBlock.append(hourCol, textArea, saveBtn);
  $(".container").append(timeBlock);
}

function getTimeBlockClass(hour) {
  var currentHour = dayjs().hour();
  if (hour < currentHour) {
    return "col-10 description past";
  } else if (hour === currentHour) {
    return "col-10 description present";
  } else {
    return "col-10 description future";
  }
}

function getLocalStorageKey(hour) {
  return "event_" + dayjs().format("YYYY-MM-DD") + "_" + hour;
}
