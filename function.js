$(document).ready(function () {
  // $(".button").prop("disabled", true);
  $("input[type=text]").keyup(update);
  //$("input[type=radio]").prop("checked", "true", update);
  // $("input[type=radio]").prop("checked", "true", update);
});
function update() {
  const username = $("#username").val();
  const radio = $("#radio").prop("checked");
  if (username && radio) {
    $(".button")
      .removeAttr("disabled")
      .css("background-color", "blue")
      .css("color", "white");
    console.log("hello");
  } else {
    $(".button")
      .attr("disabled", "disabled")
      .css("background-color", "gray")
      .css("color", "white");
    console.log("error");
  }
}
function validatepassword() {
  var password = $("#password").val();
  if (password.length > 9) {
    return true;
  } else {
    return false;
  }
}
$("#password").keyup(function () {
  if (validatepassword()) {
    $("#password").css("border", "2px solid green");
    $("#password").html("<p>success</p>");
    console.log("aji");
  } else {
    $("#password").css("border", "2px solid red");
    $("#password").html("<p>failure</p>");
    console.log("vikki");
  }
});
