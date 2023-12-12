import { reveal } from "./reveal.mjs";

const YouTubeElement = document.querySelector("[data-youtube]")
let youTubeWidth;
let youTubeHeight;

function youTubeVideoHeight() {
  youTubeWidth = window.getComputedStyle(YouTubeElement).width;
  youTubeHeight = parseInt(youTubeWidth)*9/16
  YouTubeElement.style.height = youTubeHeight + "px";
}

youTubeVideoHeight();
if (window.innerWidth < 1024) {
  onscroll = (event) => {
    reveal();
  };
}

window.onresize = function() {
  youTubeVideoHeight();
  if (window.innerWidth < 1024) {
    onscroll = (event) => {
      reveal();
    };
  }
};