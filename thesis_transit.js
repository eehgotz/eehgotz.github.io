$(document).ready(function() {


  $("#help").hover(
    function(){
      $("#instructions").show();
  },
    function () {
      $("#instructions").hide();
     }
  );

  function showStation() {
    $("#subwayStation").show();
    }
  setTimeout(showStation, 60000);

  function showTrain() {
    $("#train").show();
    $("#subwaySounds").show();
    }
  setTimeout(showTrain, 65000);

  function showCar() {
    $("#car").show();
    }
  setTimeout(showCar, 125000);

  function showNextWorld() {
    $("#nextWorld").show();
    }
  setTimeout(showNextWorld, 185000);

  function popUp1() {
    $("#pop1").show();
    $("#pop1x").show();
    }
  setTimeout(popUp1, 32000);

  function popUp2() {
    $("#pop2").show();
    $("#pop2x").show();
    }
  setTimeout(popUp2, 72000);

  function popUp3() {
    $("#pop3").show();
    $("#pop3x").show();
    }
  setTimeout(popUp3, 112000);

  function popUp4() {
    $("#pop4").show();
    $("#pop4x").show();
    }
  setTimeout(popUp4, 142000);

  function popUp5() {
    $("#pop5").show();
    $("#pop5x").show();
    }
  setTimeout(popUp5, 162000);

  function popUp6() {
    $("#pop6").show();
    $("#pop6x").show();
    }
  setTimeout(popUp6, 167000);

})
