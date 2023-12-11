import { donationList } from "./mjs/donationList.mjs";
import { reveal } from "./mjs/reveal.mjs";
import { youTubeVideoHeight } from "./mjs/youTubeVideoHeight.mjs";
import { openPopUp, closePopUp } from "./mjs/popup.mjs";
import { readMore, readLess } from "./mjs/readMore.mjs"
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
