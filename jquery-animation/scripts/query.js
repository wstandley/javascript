$(document).ready(function () {
  $("#move-left").click(function () {
    $("#moving-object").animate({ left: "20px" });
  });
});

$(document).ready(function () {
  $("#move-right").click(function () {
    $("#moving-object").animate({ left: "60px" });
  });
});

$(document).ready(function () {
  $("#move-up").click(function () {
    $("#moving-object").animate({ top: "100px" });
  });
});

$(document).ready(function () {
  $("#move-down").click(function () {
    $("#moving-object").animate({ top: "200px" });
  });
});

$(document).ready(function () {
  $("#slide").click(function () {
    $("#sliding-object").slideToggle(3000);
  });
});

$(document).ready(function () {
  $("#stop").click(function () {
    $("#sliding-object").stop();
  });
});

$(document).ready(function () {
  $("#callback").click(function () {
    $("#moving-object").hide("slow", function () {});
  });
});

$(document).ready(function () {
  $("#chain").click(function () {
    $("#chain-object").slideUp(1000).slideDown(1000);
  });
});
