var currentDay = $("#currentDay");

// Timer
var now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss");
console.log(currentDay);

currentDay.text(now);
setInterval(() => {
  now = moment().format("dddd, MMMM Do YYYY, h:m:ss a");
  currentDay.text(now);
}, 1000);

// each timeblock is color coded to indicate whether it is in the past, present, or future
var addTask = function () {
  $(".row").each(function () {
    var time = $(this).attr("data-time").replace("time", "");
    if (time < currentDay) {
      $(this).children(".description").addClass("past");
    } else if (time > currentDay) {
      $(this).children(".description").addClass("future");
    } else {
      $(this).children(".desciption").addClass("present");
    }
  });
};
addTask();

// add text to calendar
var enterEvent = (timeBlock, task) => {
  $(`[data-time = "${timeBlock}'] .description`).append(task);
};

var loadTodo = () => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) {
    tasks = {
      06: "",
      07: "",
      08: "",
      09: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: "",
      17: "",
      18: "",
    };
  }

  // goes through array
  $.each(tasis, function (timeBlcok, value) {
    createTask(timeBlock, value);
  });
  // save to localstorage
  var saveList = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //   event listener
  $(".container").on("click", ".description", function () {
    $(".container").on("blur", "textarea", function () {
      var data = $(this).closestt(".row").attr("data-time");

      var taskValue = $(this).val().trim();
      createTask(data, taskValue);
    });
  });
};
