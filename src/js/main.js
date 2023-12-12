import "./mjs/fetchHTML.mjs";
import "./mjs/donations/donationList.mjs";
import { youTubeVideoHeight } from "./mjs/features/youTubeVideoHeight.mjs";
import { revealButtons } from "./mjs/features/revealButtons.mjs";
import "./mjs/buttons/popup.mjs";
import "./mjs/buttons/seeAll.mjs";
import "./mjs/buttons/share.mjs";
import "./mjs/buttons/readMore.mjs";

onscroll = (event) => {
  revealButtons();
}

window.onresize = function() {
  youTubeVideoHeight();
};