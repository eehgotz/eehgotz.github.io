$(document).ready(function() {


  $("#help").hover(
    function(){
      $("#instructions").show();
  },
    function () {
      $("#instructions").hide();
     }
  );

  $("#yakuzaPop1").click(function(){
  $("#yakuzaPop2").show();
  });
  $("#yakuzaPop1").click(function(){
  $("#yakuzaPop1").hide();
  });

  $("#yakuzaPop2").click(function(){
  $("#yakuzaPop2").hide();
  });


  function geishaPop() {
    $("#geishaPop1").show();
    }
  setTimeout(geishaPop, 30000);

  $("#geishaPop1").click(function(){
  $("#geishaPop1").hide();
  });


  function samuraiPop() {
    $("#samuraiPop1").show();
    }
  setTimeout(samuraiPop, 60000);

  $("#samuraiPop1").click(function(){
  $("#samuraiPop2").show();
  });
  $("#samuraiPop1").click(function(){
  $("#samuraiPop1").hide();
  });

  $("#samuraiPop2").click(function(){
  $("#samuraiPop2").hide();
  });

  function popUp1() {
    $("#pop1").show();
    }
  setTimeout(popUp1, 20000);

  function popUp2() {
    $("#pop2").show();
    }
  setTimeout(popUp2, 35000);

  function popUp3() {
    $("#pop3").show();
    }
  setTimeout(popUp3, 50000);

  function popUp4() {
    $("#pop4").show();
    }
  setTimeout(popUp4, 65000);

  function popUp5() {
    $("#pop5").show();
    }
  setTimeout(popUp5, 75000);

  function popUp6() {
    $("#pop6").show();
    }
  setTimeout(popUp6, 80000);

  function popUp7() {
    $("#pop7").show();
    }
  setTimeout(popUp7, 85000);



})
