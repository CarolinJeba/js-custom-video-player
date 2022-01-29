const video = document.getElementById("video");
const controls = document.getElementsByClassName("controls");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const progressBar = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play and Pause video
function toggleVideoStatus() {
  video.pause ? video.play() : video.pause();
}

// Update Play/Pause Icon
function updatePlayIcon() {
  video.paused
    ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>');
}

// Update progress and timestamp
function updateProgress() {
  progressBar.value = (video.currentTime / video.duration) * 100;

  // Get the minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < video.duration) {
    mins = "0" + String(mins);
  }

  // Get Seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < video.duration) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progressBar.value * video.duration) / 100;
}

// Stop Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

playBtn.addEventListener("click", toggleVideoStatus);

progressBar.addEventListener("change", setVideoProgress);

stopBtn.addEventListener("click", stopVideo);
