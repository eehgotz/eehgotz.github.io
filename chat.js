$(document).ready(function() {

$("#link").hover(function(){
  $(this).css('cursor', 'pointer');
});

$("#link").click(function(){
  $(this).css('cursor', 'wait');
});

$("#chatbot").click(function(){
$("#input1").show();
$("#chatfield").show();
$("#chatbot").hide();
  });

$("#input1").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line1").show();
    $("#input1").hide();
    $("#input2").show();
  }})

$("#input2").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line2").show();
    $("#input2").hide();
    $("#input3").show();
  }})

$("#input3").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line3").show();
    $("#input3").hide();
    $("#input4").show();
  }})

$("#input4").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line4").show();
    $("#input4").hide();
    $("#input5").show();
  }})

$("#input5").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line5").show();
    $("#input5").hide();
    $("#input6").show();
  }})

$("#input6").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line6").show();
    $("#input6").hide();
    $("#input7").show();
    $("#line1").hide();
    $("#line2").hide();
    $("#line3").hide();
    $("#line4").hide();
    $("#line5").hide();
  }})

$("#input7").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line7").show();
    $("#input7").hide();
    $("#input8").show();
  }})

$("#input8").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line8").show();
    $("#input8").hide();
  }})

});
