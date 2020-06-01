/*
  [1] next()
  [2] not()
  [3] slideToggle()
  [4] slideUp()
*/
$(document).ready(function () {
  $(".accordion h2").click(function () {
    $(this).next().slideToggle(500);
    $("p").not($(this).next()).slideUp(500);
  });
});
