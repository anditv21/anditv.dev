// set the cursor image
function setCursor() {
  document.body.style.cursor = "url('https://i.ibb.co/X2Jkz6r/image.png'), default";
}

function hitmarker() {
  var audio = document.getElementById("audio");
  playAudio(audio);
  var hitmarkerimg =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjA76PVpAAABqklEQVQ4T41Ty2rCUBQMfk3d9zNKCmI1JN6AIIkVEhPjeyOkdN8K7rt3qz/gotkqiF+ggn6Dye2ceGOr9TUQuHBec85MJNd19UKhEJRKJV26E7quF6mmVqtpkqZp34vFgjcajTCbzTKRcxGMMafVakXz+Zzn8/lAMgzjxfO8cLVa8Xq9HuZyuYtMqLjdbkebzYZ3Oh1umuY+FwEGOuF6vaYm0WmTXq+XkmW5iKJou91yMKDvU4T3wE46mETUBOvs/jbJZDIGTaTJYMAdx3kToWNQEzDYLZdLakJs1HK5LNPEhHa1Wn0X6eeBCxMTPplMOFgMoc7XeDyOaVuW5Yu067BtWwXtIXZ/HAwGaTAbgo0pwrdRqVReabrv++l+v/+A9xf21kT4OlRVtbvdbrwC3vEKo9HopsQxYCqLdCapms0mFZmQ9ymRGIeNYJ7zZkNx7LDk2mj0IUIHiclspxJLnPMUEtzEYaQzko5NApDZSGLR5NdsuLhHRTdNApDEWCc2G1bcQVZG9ILZbBbT/mfPM0jMNp1OuaIogYSLP9Pj8GPcAcjM6E90XVf5AShaLyAdryewAAAAAElFTkSuQmCC";
  document.getElementsByTagName("body")[0].style.cursor = "url('" + hitmarkerimg + "') " + ", default";
  sleep(120).then(() => {
      setCursor();
  });
}

// play audio element
function playAudio(audioElement) {
  audioElement.play();
}

// sleep for a given time
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// update clock display
function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours() % 12 || 12;
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const ampm = currentTime.getHours() >= 12 ? "pm" : "am";
  const clockElement = document.getElementById("clock");
  clockElement.textContent = `${hours} : ${minutes} ${ampm}`;
}

// add event listener to audio toggle button
function addAudioToggleListener() {
  const audioElement = document.getElementById("switchaudio");
  let isPlaying = false;
  $(".round").click(async function () {
    if (isPlaying) {
      audioElement.pause();
      isPlaying = false;
    } else {
      await sleep(1000);
      playAudio(audioElement);
      isPlaying = true;
    }
  });
}

// run functions on DOM load
$(document).ready(function () {
  setCursor();
  setInterval(updateClock, 1000);
  addAudioToggleListener();
});
