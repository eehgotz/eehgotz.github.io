$(document).ready(function() {


  window.onload = choosePic;

  var myPix1 = new Array("https://i.imgur.com/4sAdJZ1.png","https://i.imgur.com/79c6uNv.png","https://i.imgur.com/9jE3s7m.png","https://i.imgur.com/atTza3P.png","https://i.imgur.com/garxJAA.png","https://i.imgur.com/MvS47sX.png","https://i.imgur.com/G3FwREy.png","https://i.imgur.com/o0cCTzn.png","https://i.imgur.com/OmgPZT6.png","https://i.imgur.com/B1GBT1C.png","https://i.imgur.com/6CSz33o.png","https://i.imgur.com/Ucsag7a.png","https://i.imgur.com/L6dPo93.png");

  var myPix2 = new Array("https://i.imgur.com/90jam6W.png","https://i.imgur.com/OHI2PK7.png","https://i.imgur.com/Bk0FU2D.png","https://i.imgur.com/55H32Lc.png","https://i.imgur.com/KiO97J3.png","https://i.imgur.com/CMUxXXE.png","https://i.imgur.com/JlHgtxV.jpg");

  var myPix3 = new Array("https://i.imgur.com/4PuVTLU.png","https://i.imgur.com/kUicELO.png","https://i.imgur.com/YS9CVur.png","https://i.imgur.com/vvRadt2.png","https://i.imgur.com/mYhJZ3T.png","https://i.imgur.com/4xkbkNT.gif","https://i.imgur.com/Pn8lKZx.gif");

  var myVid1 = new Array("https://player.vimeo.com/video/689028492?h=c338442fad&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/689305524?h=4982d9206b&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/695070674?h=3989c1594b&loop=1&title=0&byline=0");

  var myVid2 = new Array("https://player.vimeo.com/video/702597406?h=71697c441a&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/698686932?h=0eb2401925&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/699773618?h=a8074f1f38&autoplay=1&loop=1&title=0&byline=0");

  var myPix4 = new Array("https://i.imgur.com/4sAdJZ1.png","https://i.imgur.com/79c6uNv.png","https://i.imgur.com/9jE3s7m.png","https://i.imgur.com/atTza3P.png","https://i.imgur.com/garxJAA.png","https://i.imgur.com/MvS47sX.png","https://i.imgur.com/G3FwREy.png","https://i.imgur.com/o0cCTzn.png","https://i.imgur.com/OmgPZT6.png","https://i.imgur.com/B1GBT1C.png","https://i.imgur.com/6CSz33o.png","https://i.imgur.com/Ucsag7a.png","https://i.imgur.com/L6dPo93.png");

  var myPix5 = new Array("https://i.imgur.com/90jam6W.png","https://i.imgur.com/OHI2PK7.png","https://i.imgur.com/Bk0FU2D.png","https://i.imgur.com/55H32Lc.png","https://i.imgur.com/KiO97J3.png","https://i.imgur.com/CMUxXXE.png","https://i.imgur.com/JlHgtxV.jpg");

  var myPix6 = new Array("https://i.imgur.com/4PuVTLU.png","https://i.imgur.com/kUicELO.png","https://i.imgur.com/YS9CVur.png","https://i.imgur.com/vvRadt2.png","https://i.imgur.com/mYhJZ3T.png","https://i.imgur.com/4xkbkNT.gif","https://i.imgur.com/Pn8lKZx.gif");

  var myVid3 = new Array("https://player.vimeo.com/video/689028492?h=c338442fad&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/689305524?h=4982d9206b&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/695070674?h=3989c1594b&loop=1&title=0&byline=0");

  var myVid4 = new Array("https://player.vimeo.com/video/702597406?h=71697c441a&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/698686932?h=0eb2401925&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/699773618?h=a8074f1f38&autoplay=1&loop=1&title=0&byline=0");

  var myPix7 = new Array("https://i.imgur.com/4sAdJZ1.png","https://i.imgur.com/79c6uNv.png","https://i.imgur.com/9jE3s7m.png","https://i.imgur.com/atTza3P.png","https://i.imgur.com/garxJAA.png","https://i.imgur.com/MvS47sX.png","https://i.imgur.com/G3FwREy.png","https://i.imgur.com/o0cCTzn.png","https://i.imgur.com/OmgPZT6.png","https://i.imgur.com/B1GBT1C.png","https://i.imgur.com/6CSz33o.png","https://i.imgur.com/Ucsag7a.png","https://i.imgur.com/L6dPo93.png");

  var myPix8 = new Array("https://i.imgur.com/90jam6W.png","https://i.imgur.com/OHI2PK7.png","https://i.imgur.com/Bk0FU2D.png","https://i.imgur.com/55H32Lc.png","https://i.imgur.com/KiO97J3.png","https://i.imgur.com/CMUxXXE.png","https://i.imgur.com/JlHgtxV.jpg");

  var myPix9 = new Array("https://i.imgur.com/4PuVTLU.png","https://i.imgur.com/kUicELO.png","https://i.imgur.com/YS9CVur.png","https://i.imgur.com/vvRadt2.png","https://i.imgur.com/mYhJZ3T.png","https://i.imgur.com/4xkbkNT.gif","https://i.imgur.com/Pn8lKZx.gif");

  var myVid5 = new Array("https://player.vimeo.com/video/689028492?h=c338442fad&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/689305524?h=4982d9206b&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/695070674?h=3989c1594b&loop=1&title=0&byline=0");

  var myVid6 = new Array("https://player.vimeo.com/video/702597406?h=71697c441a&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/698686932?h=0eb2401925&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/699773618?h=a8074f1f38&autoplay=1&loop=1&title=0&byline=0");

  var myPix10 = new Array("https://i.imgur.com/4sAdJZ1.png","https://i.imgur.com/79c6uNv.png","https://i.imgur.com/9jE3s7m.png","https://i.imgur.com/atTza3P.png","https://i.imgur.com/garxJAA.png","https://i.imgur.com/MvS47sX.png","https://i.imgur.com/G3FwREy.png","https://i.imgur.com/o0cCTzn.png","https://i.imgur.com/OmgPZT6.png","https://i.imgur.com/B1GBT1C.png","https://i.imgur.com/6CSz33o.png","https://i.imgur.com/Ucsag7a.png","https://i.imgur.com/L6dPo93.png");

  var myPix11 = new Array("https://i.imgur.com/90jam6W.png","https://i.imgur.com/OHI2PK7.png","https://i.imgur.com/Bk0FU2D.png","https://i.imgur.com/55H32Lc.png","https://i.imgur.com/KiO97J3.png","https://i.imgur.com/CMUxXXE.png","https://i.imgur.com/JlHgtxV.jpg");

  var myPix12 = new Array("https://i.imgur.com/4PuVTLU.png","https://i.imgur.com/kUicELO.png","https://i.imgur.com/YS9CVur.png","https://i.imgur.com/vvRadt2.png","https://i.imgur.com/mYhJZ3T.png","https://i.imgur.com/4xkbkNT.gif","https://i.imgur.com/Pn8lKZx.gif");

  var myVid7 = new Array("https://player.vimeo.com/video/689028492?h=c338442fad&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/689305524?h=4982d9206b&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/695070674?h=3989c1594b&loop=1&title=0&byline=0");

  var myVid8 = new Array("https://player.vimeo.com/video/702597406?h=71697c441a&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/698686932?h=0eb2401925&autoplay=1&loop=1&title=0&byline=0","https://player.vimeo.com/video/699773618?h=a8074f1f38&autoplay=1&loop=1&title=0&byline=0");

  function choosePic() {
       var randomNum = Math.floor(Math.random() * myPix1.length);
       document.getElementById("myPicture1").src = myPix1[randomNum];
       var randomNum = Math.floor(Math.random() * myPix2.length);
       document.getElementById("myPicture2").src = myPix2[randomNum];
       var randomNum = Math.floor(Math.random() * myPix3.length);
       document.getElementById("myPicture3").src = myPix3[randomNum];
       var randomNum = Math.floor(Math.random() * myVid1.length);
       document.getElementById("myVideo1").src = myVid1[randomNum];
       var randomNum = Math.floor(Math.random() * myVid2.length);
       document.getElementById("myVideo2").src = myVid2[randomNum];
       var randomNum = Math.floor(Math.random() * myPix4.length);
       document.getElementById("myPicture4").src = myPix4[randomNum];
       var randomNum = Math.floor(Math.random() * myPix5.length);
       document.getElementById("myPicture5").src = myPix5[randomNum];
       var randomNum = Math.floor(Math.random() * myPix6.length);
       document.getElementById("myPicture6").src = myPix6[randomNum];
       var randomNum = Math.floor(Math.random() * myVid3.length);
       document.getElementById("myVideo3").src = myVid3[randomNum];
       var randomNum = Math.floor(Math.random() * myVid4.length);
       document.getElementById("myVideo4").src = myVid4[randomNum];
       var randomNum = Math.floor(Math.random() * myPix7.length);
       document.getElementById("myPicture7").src = myPix7[randomNum];
       var randomNum = Math.floor(Math.random() * myPix8.length);
       document.getElementById("myPicture8").src = myPix8[randomNum];
       var randomNum = Math.floor(Math.random() * myPix9.length);
       document.getElementById("myPicture9").src = myPix9[randomNum];
       var randomNum = Math.floor(Math.random() * myVid5.length);
       document.getElementById("myVideo5").src = myVid5[randomNum];
       var randomNum = Math.floor(Math.random() * myVid6.length);
       document.getElementById("myVideo6").src = myVid6[randomNum];
       var randomNum = Math.floor(Math.random() * myPix10.length);
       document.getElementById("myPicture10").src = myPix10[randomNum];
       var randomNum = Math.floor(Math.random() * myPix11.length);
       document.getElementById("myPicture11").src = myPix11[randomNum];
       var randomNum = Math.floor(Math.random() * myPix12.length);
       document.getElementById("myPicture12").src = myPix12[randomNum];
       var randomNum = Math.floor(Math.random() * myVid7.length);
       document.getElementById("myVideo7").src = myVid7[randomNum];
       var randomNum = Math.floor(Math.random() * myVid8.length);
       document.getElementById("myVideo8").src = myVid8[randomNum];
  }

  function numberRandomizer1(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer2(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer3(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer4(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer5(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer6(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer7(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer8(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer9(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer10(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }

  function numberRandomizer11(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer12(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer13(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer14(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer15(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer16(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer17(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer18(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer19(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer20(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }

  function numberRandomizer21(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer22(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer23(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer24(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer25(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer26(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer27(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer28(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer29(){
    var x = Math.floor(Math.random() * 60); //random number between 50 and 300
    return x;
  }
  function numberRandomizer30(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }

  function numberRandomizer31(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer32(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer33(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer34(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer35(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer36(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer37(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer38(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer39(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer40(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }

  function numberRandomizer41(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer42(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer43(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }
  function numberRandomizer44(){
    var x = Math.floor(Math.random() * 70); //random number between 50 and 300
    return x;
  }

  function numberRandomizer45(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer46(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer47(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer48(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer49(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer50(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer51(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }
  function numberRandomizer52(){
    var x = Math.floor(Math.random() * 90); //random number between 50 and 300
    return x;
  }

  document.getElementById('myPicture1').style.top = numberRandomizer1() + 'vh';
  document.getElementById('myPicture1').style.left = numberRandomizer2() + 'vw';
  document.getElementById('myPicture2').style.top = numberRandomizer3() + 'vh';
  document.getElementById('myPicture2').style.left = numberRandomizer4() + 'vw';
  document.getElementById('myPicture3').style.top = numberRandomizer5() + 'vh';
  document.getElementById('myPicture3').style.left = numberRandomizer6() + 'vw';
  document.getElementById('myVideo1').style.top = numberRandomizer7() + 'vh';
  document.getElementById('myVideo1').style.left = numberRandomizer8() + 'vw';
  document.getElementById('myVideo2').style.top = numberRandomizer9() + 'vh';
  document.getElementById('myVideo2').style.left = numberRandomizer10() + 'vw';

  document.getElementById('myPicture4').style.top = numberRandomizer11() + 'vh';
  document.getElementById('myPicture4').style.left = numberRandomizer12() + 'vw';
  document.getElementById('myPicture5').style.top = numberRandomizer13() + 'vh';
  document.getElementById('myPicture5').style.left = numberRandomizer14() + 'vw';
  document.getElementById('myPicture6').style.top = numberRandomizer15() + 'vh';
  document.getElementById('myPicture6').style.left = numberRandomizer16() + 'vw';
  document.getElementById('myVideo3').style.top = numberRandomizer17() + 'vh';
  document.getElementById('myVideo3').style.left = numberRandomizer18() + 'vw';
  document.getElementById('myVideo4').style.top = numberRandomizer19() + 'vh';
  document.getElementById('myVideo4').style.left = numberRandomizer20() + 'vw';

  document.getElementById('myPicture7').style.top = numberRandomizer21() + 'vh';
  document.getElementById('myPicture7').style.left = numberRandomizer22() + 'vw';
  document.getElementById('myPicture8').style.top = numberRandomizer23() + 'vh';
  document.getElementById('myPicture8').style.left = numberRandomizer24() + 'vw';
  document.getElementById('myPicture9').style.top = numberRandomizer25() + 'vh';
  document.getElementById('myPicture9').style.left = numberRandomizer26() + 'vw';
  document.getElementById('myVideo5').style.top = numberRandomizer27() + 'vh';
  document.getElementById('myVideo5').style.left = numberRandomizer28() + 'vw';
  document.getElementById('myVideo6').style.top = numberRandomizer29() + 'vh';
  document.getElementById('myVideo6').style.left = numberRandomizer30() + 'vw';

  document.getElementById('myPicture10').style.top = numberRandomizer31() + 'vh';
  document.getElementById('myPicture10').style.left = numberRandomizer32() + 'vw';
  document.getElementById('myPicture11').style.top = numberRandomizer33() + 'vh';
  document.getElementById('myPicture11').style.left = numberRandomizer34() + 'vw';
  document.getElementById('myPicture12').style.top = numberRandomizer35() + 'vh';
  document.getElementById('myPicture12').style.left = numberRandomizer36() + 'vw';
  document.getElementById('myVideo7').style.top = numberRandomizer37() + 'vh';
  document.getElementById('myVideo7').style.left = numberRandomizer38() + 'vw';
  document.getElementById('myVideo8').style.top = numberRandomizer39() + 'vh';
  document.getElementById('myVideo8').style.left = numberRandomizer40() + 'vw';

  document.getElementById('spotify1').style.top = numberRandomizer41() + 'vh';
  document.getElementById('spotify1').style.left = numberRandomizer42() + 'vw';
  document.getElementById('spotify2').style.top = numberRandomizer43() + 'vh';
  document.getElementById('spotify2').style.left = numberRandomizer44() + 'vw';

  document.getElementById('sound1').style.top = numberRandomizer45() + 'vh';
  document.getElementById('sound1').style.left = numberRandomizer46() + 'vw';
  document.getElementById('sound2').style.top = numberRandomizer47() + 'vh';
  document.getElementById('sound2').style.left = numberRandomizer48() + 'vw';
  document.getElementById('sound3').style.top = numberRandomizer49() + 'vh';
  document.getElementById('sound3').style.left = numberRandomizer50() + 'vw';
  document.getElementById('sound4').style.top = numberRandomizer51() + 'vh';
  document.getElementById('sound4').style.left = numberRandomizer52() + 'vw';

    $("#help").hover(
      function(){
        $("#instructions").show();
    },
      function () {
        $("#instructions").hide();
       }
    );

    var s1 = document.getElementById('sound1A');
    var s1Btn = document.getElementById('sound1');
    var s2 = document.getElementById('sound2A');
    var s2Btn = document.getElementById('sound2');
    var s3 = document.getElementById('sound3A');
    var s3Btn = document.getElementById('sound3');
    var s4 = document.getElementById('sound4A');
    var s4Btn = document.getElementById('sound4');

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

    s4Btn.addEventListener('click', function(){
       s4Btn.classList.toggle('playing');
       playPause(s4);
       progress(s4Btn, s4);
    });

})
