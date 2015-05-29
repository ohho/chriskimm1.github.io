var slider = 1;
var next_img = 2;

function start_slider(){
  var count = $("#slider img").size();
  var loop = setInterval(function(){
    $("#slider img").fadeOut(300);
    $("#slider img#" + next_img).fadeIn(300);
    slider = next_img;
    next_img++;

    if(next_img > count){
      slider = 0;
      next_img = 1; 
    }
  }, 3000);
}

$(document).ready(function(){
  $("#slider img#1").fadeIn(300);
  start_slider();
});