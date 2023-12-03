const YouTubeElement = document.querySelector("[data-youtube]")
let youTubeWidth;
let youTubeHeight;

export function youTubeVideoHeight() {
  youTubeWidth = window.getComputedStyle(YouTubeElement).width;
  youTubeHeight = parseInt(youTubeWidth)*9/16
  YouTubeElement.style.height = youTubeHeight + "px";
}