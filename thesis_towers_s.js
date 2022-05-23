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
  setTimeout(popUp1, 9000);

  $("#pop1x").click(
    function(){
      $("#pop1").hide();
    }
  )

  function popUp2() {
    $("#pop2").show();
    }
  setTimeout(popUp2, 12000);

  function popUp3() {
    $("#pop3").show();
    }
  setTimeout(popUp3, 15000);

  function popUp4() {
    $("#pop4").show();
    }
  setTimeout(popUp4, 18000);


  function popUp5() {
    $("#pop5").show();
    }
  setTimeout(popUp5, 21000);

  function popUp6() {
    $("#pop6").show();
    }
  setTimeout(popUp6, 24000);

  function popUp7() {
    $("#pop7").show();
    }
  setTimeout(popUp7, 26000);

  function popUp8() {
    $("#pop8").show();
    }
  setTimeout(popUp8, 28000);

  function popUp9() {
    $("#pop9").show();
    }
  setTimeout(popUp9, 29000);

  function popUp10() {
    $("#pop10").show();
    }
  setTimeout(popUp10, 30000);

  function popUp11() {
    $("#pop11").show();
    }
  setTimeout(popUp11, 31000);

  function popUp12() {
    $("#pop12").show();
    }
  setTimeout(popUp12, 32000);

  function popUp13() {
    $("#pop13").show();
    }
  setTimeout(popUp13, 33000);


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


})
