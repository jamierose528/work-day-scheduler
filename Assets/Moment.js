var currentDay = $("#currentDay")

// Timer
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay)

currentDay.text(now)
setInterval(() => {
    now = moment().format("dddd, MMMM Do YYYY, h:m:ss a")
    currentDay.text(now);
}, 1000);

// each timeblock is color coded to indicate whether it is in the past, present, or future
var timeBlock = function () {
    $(".row").each(function() {
        var time = $(this).attr("data-time").replace("time", "");
        if (time < currentDay) {
            $(this).children(".description").addClass("past");
        } else if (time > currentDay) {
            $(this).children(".description").addClass("future");
        } else {
            $(this).children(".desciption").addClass("present")
        }
    })
}
timeBlock();