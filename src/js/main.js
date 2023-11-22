import { donationList } from "./donationList.mjs";
import { reveal } from "./reveal.mjs";
import { youTubeVideoHeight } from "./youTubeVideoHeight.mjs";
import { openPopUp, closePopUp } from "./popup.js"

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

