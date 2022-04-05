$(document).ready(function() {


  $("#help").hover(
    function(){
      $("#instructions").show();
  },
    function () {
      $("#instructions").hide();
     }
  );

  function showGuides() {
    $("#downloadGuides").show();
    }
  setTimeout(showGuides, 8000);

  function download() {
    $("#downloadPopUp").show();
    }
  setTimeout(download, 16000);

  function showTrain() {
    $("#train").show();
    }
  setTimeout(showTrain, 60000);

  function showCar() {
    $("#car").show();
    }
  setTimeout(showCar, 120000);

  $("#pop1x").click(
    function(){
      $("#pop1").hide();
      $("#pop1x").hide();
    }
  )

  function popUp2() {
    $("#pop2").show();
    $("#pop2x").show();
    }
  setTimeout(popUp2, 88000);

  $("#pop2x").click(
    function(){
      $("#pop2").hide();
      $("#pop2x").hide();
    }
  )

  function popUp3() {
    $("#pop3").show();
    $("#pop3x").show();
    }
  setTimeout(popUp3, 93000);

  $("#pop3x").click(
    function(){
      $("#pop3").hide();
      $("#pop3x").hide();
    }
  )

  function popUp4() {
    $("#pop4").show();
    $("#pop4x").show();
    }
  setTimeout(popUp4, 98000);

  $("#pop4x").click(
    function(){
      $("#pop4").hide();
      $("#pop4x").hide();
    }
  )

  function popUp5() {
    $("#pop5").show();
    $("#pop5x").show();
    }
  setTimeout(popUp5, 103000);

  $("#pop5x").click(
    function(){
      $("#pop5").hide();
      $("#pop5x").hide();
    }
  )

})
