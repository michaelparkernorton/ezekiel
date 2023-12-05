import { donationList } from "./donationList.mjs";
import { reveal } from "./reveal.mjs";
import { youTubeVideoHeight } from "./youTubeVideoHeight.mjs";
import { openPopUp, closePopUp, copyToClip } from "./popup.js";
import { readMore, readLess } from "./readMore.js"
donationList();
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

openPopUp();
closePopUp();
readMore();
readLess();
