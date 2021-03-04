$(document).ready(function() {
$("#tracery").draggable();

$("#flock").hover(function(){
$("#roll1").show();
});
$("#flock").hover(function(){
$("#roll2").hide();
});
$("#flock").hover(function(){
$("#roll3").hide();
});

$("#haze").hover(function(){
$("#roll2").show();
});
$("#haze").hover(function(){
$("#roll1").hide();
});
$("#haze").hover(function(){
$("#roll3").hide();
});

$("#art").hover(function(){
$("#roll3").show();
});
$("#art").hover(function(){
$("#roll2").hide();
});
$("#art").hover(function(){
$("#roll1").hide();
});

$("#sourcecode").click(function(){
$("#tracery").show();
});
$("#sourcecode").dblclick(function(){
$("#tracery").hide();
});
  })
