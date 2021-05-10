$(document).ready(function() {

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
    noOfCounts ++;
  }})

$("#input2").keyup(function(event){
  if (event.keyCode === 13) {
    $("#line2").show();
  }})


});
