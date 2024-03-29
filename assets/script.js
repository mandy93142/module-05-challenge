$(document).ready(function() {

  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

    $(".notification").addClass("show");

    setTimeout(function(){
      $(".notification").removeClass("show");
    }, 5000);
  });

  function hourUpdate(){
    var currenthour = moment().hours();

    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if(blockHour < currenthour){
        $(this).addClass("past");  
      } else if(blockHour === currenthour){
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  hourUpdate()

  var interval = setInterval(hourUpdate, 15000)

  $("#hour-9.descrpition").val(localStorage.getItem("hour-9"))
  $("#hour-10.descrpition").val(localStorage.getItem("hour-10"))
  $("#hour-11.descrpition").val(localStorage.getItem("hour-11"))
  $("#hour-12.descrpition").val(localStorage.getItem("hour-12"))
  $("#hour-13.descrpition").val(localStorage.getItem("hour-13"))
  $("#hour-14.descrpition").val(localStorage.getItem("hour-14"))
  $("#hour-15.descrpition").val(localStorage.getItem("hour-15"))
  $("#hour-16.descrpition").val(localStorage.getItem("hour-16"))
  $("#hour-17.descrpition").val(localStorage.getItem("hour-17"))

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});










