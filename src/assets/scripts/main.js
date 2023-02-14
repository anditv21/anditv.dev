function setcursor() {
  document.getElementsByTagName("body")[0].style.cursor = "url('https://i.ibb.co/X2Jkz6r/image.png'), default";
}

function hitmarker() {
  play();
  var hitmarkerimg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjA76PVpAAABqklEQVQ4T41Ty2rCUBQMfk3d9zNKCmI1JN6AIIkVEhPjeyOkdN8K7rt3qz/gotkqiF+ggn6Dye2ceGOr9TUQuHBec85MJNd19UKhEJRKJV26E7quF6mmVqtpkqZp34vFgjcajTCbzTKRcxGMMafVakXz+Zzn8/lAMgzjxfO8cLVa8Xq9HuZyuYtMqLjdbkebzYZ3Oh1umuY+FwEGOuF6vaYm0WmTXq+XkmW5iKJou91yMKDvU4T3wE46mETUBOvs/jbJZDIGTaTJYMAdx3kToWNQEzDYLZdLakJs1HK5LNPEhHa1Wn0X6eeBCxMTPplMOFgMoc7XeDyOaVuW5Yu067BtWwXtIXZ/HAwGaTAbgo0pwrdRqVReabrv++l+v/+A9xf21kT4OlRVtbvdbrwC3vEKo9HopsQxYCqLdCapms0mFZmQ9ymRGIeNYJ7zZkNx7LDk2mj0IUIHiclspxJLnPMUEtzEYaQzko5NApDZSGLR5NdsuLhHRTdNApDEWCc2G1bcQVZG9ILZbBbT/mfPM0jMNp1OuaIogYSLP9Pj8GPcAcjM6E90XVf5AShaLyAdryewAAAAAElFTkSuQmCC";
  document.getElementsByTagName("body")[0].style.cursor = "url('" + hitmarkerimg + "') " + ", default";
  sleep(120).then(() => {
      setcursor();
  });
}

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function update_clock() {
  var currentTime = new Date(),
    hours = currentTime.getHours(),
    minutes = currentTime.getMinutes(),
    seconds = currentTime.getSeconds();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clock_element = document.getElementById("clock");

  clock_element.innerHTML = hours + " : " + minutes + " " + ampm;
}

setInterval(update_clock, 1000);


$(document).ready(function () {
  var myAudio = document.getElementById("switchaudio");
  var isPlaying = false;

  $(".round").click(function () {
      if (isPlaying) {
          myAudio.pause();
          isPlaying = false;
      } else {
          sleep(1000).then(() => {
          myAudio.play();
          isPlaying = true;
          })
      }
  });
});

