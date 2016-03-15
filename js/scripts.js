var pingpong = function(number) {
  var text = "";
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      text += "pingpong" + "<br>";
    } else if (i % 5 === 0) {
      text += "pong" + "<br>";
    } else if (i % 3 === 0) {
      text += "ping" + "<br>";
    } else {
      text += i + "<br>";
    }
  }
     return text + "<br>";
};

$(document).ready(function() {
 $("form#pingpong").submit(function(event) {
   var number = parseInt($("input#number").val());
   var answer = pingpong(number);

   $(".answer").append(answer);
   $("#result").show();
  //  $("ul#results").append

   event.preventDefault();

  });
});
