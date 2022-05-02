$(document).ready(function() {


  $("#help").hover(
    function(){
      $("#instructions").show();
  },
    function () {
      $("#instructions").hide();
     }
  );


  function popUp1() {
    $("#pop1").show();
    }
  setTimeout(popUp1, 12000);

  function popUp2() {
    $("#pop2").show();
    }
  setTimeout(popUp2, 18000);

  function popUp3() {
    $("#pop3").show();
    }
  setTimeout(popUp3, 23000);

  function popUp4() {
    $("#pop4").show();
    }
  setTimeout(popUp4, 28000);

  function popUp5() {
    $("#pop5").show();
    }
  setTimeout(popUp5, 33000);

  function popUp6() {
    $("#pop6").show();
    }
  setTimeout(popUp6, 48000);

  function popUp7() {
    $("#pop7").show();
    }
  setTimeout(popUp7, 53000);

})
