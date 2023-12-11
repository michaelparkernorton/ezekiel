import { donationList } from "./mjs/donationList.mjs";
import { reveal } from "./mjs/reveal.mjs";
import { youTubeVideoHeight } from "./mjs/youTubeVideoHeight.mjs";
import { includeHTML } from "./mjs/includeHTML.mjs";
import "./mjs/popup.mjs";
import "./mjs/seeAll.mjs";
import "./mjs/share.mjs";
import { readMore, readLess } from "./mjs/readMore.mjs";
includeHTML();
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

readMore();
readLess();
