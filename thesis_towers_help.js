$(document).ready(function() {

  $("#intro").click(
    function(){
      $("#intro").hide();
    }
  )

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
  setTimeout(showGuides, 5000);

  function showUp() {
    $("#upwards").show();
    }
  setTimeout(showUp, 20000);

  function showOut() {
    $("#elevation").show();
    }
  setTimeout(showOut, 25000);

  function showAir() {
    $("#aerial").show();
    }
  setTimeout(showAir, 30000);

  var s1 = document.getElementById('sound1A');
  var s1Btn = document.getElementById('sound1');
  var s2 = document.getElementById('sound2A');
  var s2Btn = document.getElementById('sound2');
  var s3 = document.getElementById('sound3A');
  var s3Btn = document.getElementById('sound3');

  function playPause(song){
     if (song.paused && song.currentTime >= 0 && !song.ended) {
        song.play();
     } else {
        song.pause();
     }
  }

  function reset(btn, song){
     if(btn.classList.contains('playing')){
        btn.classList.toggle('playing');
     }
     song.pause();
     song.currentTime = 0;
  }

  function progress(btn, song){
     setTimeout(function(){
        var end = song.duration;
        var current = song.currentTime;
        var percent = current/(end/100);
        //check if song is at the end
        if(current==end){
           reset(btn, song);
        }
        //call function again
        progress(btn, song);
     }, 1000);
  }

  s1Btn.addEventListener('click', function(){
     s1Btn.classList.toggle('playing');
     playPause(s1);
     progress(s1Btn, s1);
  });

  s2Btn.addEventListener('click', function(){
     s2Btn.classList.toggle('playing');
     playPause(s2);
     progress(s2Btn, s2);
  });

  s3Btn.addEventListener('click', function(){
     s3Btn.classList.toggle('playing');
     playPause(s3);
     progress(s3Btn, s3);
  });

  function download() {
    $("#downloadPopUp").show();
    }
  setTimeout(download, 15000);

  function popUp1() {
    $("#pop1").show();
    $("#pop1x").show();
    }
  setTimeout(popUp1, 41000);

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
  setTimeout(popUp2, 45000);

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
  setTimeout(popUp3, 49000);

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
  setTimeout(popUp4, 53000);

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
  setTimeout(popUp5, 57000);

  $("#pop5x").click(
    function(){
      $("#pop5").hide();
      $("#pop5x").hide();
    }
  )


})
