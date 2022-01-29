$(document).ready(function() {

  $("#feedbackLoop").hover(
    function(){
      $("#feedbackLoopDefinition").show();
  },
    function () {
      $("#feedbackLoopDefinition").hide();
     }
  );

  $("#bibOne").hover(
    function(){
      $("#bibOneSource").show();
  },
    function () {
      $("#bibOneSource").hide();
     }
  );

})
