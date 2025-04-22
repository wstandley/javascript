$(document).ready(function () {
  // This is for the form elements to be appended when submitted
  $("#get-info").click(function () {
    var name = "Name: " + $("#fname").val() + " " + $("#lname").val() + " ";
    var phone = "Phone Number: " + $("#phone").val() + " ";
    var console = "Game Console: " + $("#console").val() + " ";
    var game = "Game Title: " + $("#game").val() + "<br>";

    $("#fill-in").append(name + phone + console + game);
    $("input").val(" ");
  });
  // This is to change the CSS for the light and dark buttons
  $("#dark").click(function () {
    $("body").removeClass("light");
    $("body").addClass("dark");
  });

  $("#light").click(function () {
    $("body").removeClass("dark");
    $("body").addClass("light");
  });
  // This is to change the font with the larger and smaller buttons
  $("#larger").click(function () {
    var setLarge = parseInt($("body").css("font-size"));
    setLarge += 5;
    $("body").css("font-size", setLarge);
  });

  $("#smaller").click(function () {
    var setSmall = parseInt($("body").css("font-size"));
    setSmall -= 5;
    $("body").css("font-size", setSmall);
  });
});
