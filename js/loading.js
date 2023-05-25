const video = document.getElementById('videoBox');
const dataContainer = document.querySelector('.loadingBox');
var body=document.querySelector("body")
// Play the video
video.play();
// Delay the display of the data container by 5 seconds
setTimeout(function() {
  // Show the data container
  dataContainer.style.display = 'none';
}, 4000);