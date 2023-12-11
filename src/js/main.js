import { donationList } from "./mjs/donationList.mjs";
import { reveal } from "./mjs/reveal.mjs";
import { youTubeVideoHeight } from "./mjs/youTubeVideoHeight.mjs";
import "./mjs/popup.mjs";
import "./mjs/seeAll.mjs";
import "./mjs/share.mjs";
import { readMore, readLess } from "./mjs/readMore.mjs"

import {  } from "module";
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
