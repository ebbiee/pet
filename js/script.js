$(document).ready(function () {
  $("button#black").click(function () {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("body").addClass("white-color");
  });
  $("#white").click(function () {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
