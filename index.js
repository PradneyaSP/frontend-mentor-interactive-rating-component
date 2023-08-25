// document.querySelector("button").addEventListener("click" , function(){
//     document.querySelector(".text").classList.toggle("invisible");
// });

var num = 0;
$(".warning").addClass("invisible");

$(".number").click(function () {
  $(".warning").addClass("invisible");
  $(".number").removeClass("onClick");
  if (this.innerHTML != num) {
    $(this).addClass("onClick");
    num = this.innerHTML;
  } else num = 0;
});

$(".submit").click(function () {
  if (num === 0) {
    $(".warning").removeClass("invisible");
    $(this).addClass("shake-horizontal");
    setTimeout(
      function () {
        this.classList.remove("shake-horizontal");
      }.bind(this),
      1000
    );
  } else {
    $(".main").fadeOut(500, function () {
      $(".thank-you").removeClass("invisible").hide().fadeIn(500);
    });
    $(".review-score").text("You selected " + num + " out of 5");
  }
});
