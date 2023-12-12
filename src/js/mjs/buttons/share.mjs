import { openPopUp, closePopUp } from "./popup.mjs";
import { copyToClip } from "./clipboard.mjs";

const sharePopUp = document.querySelector('.sharePopUp');
const shareButton = document.getElementById('shareButton');
const closePopUpButton = document.getElementById('popUpDoneBtn');
const copyButton = document.getElementById('copyButton');

shareButton.addEventListener('click', openShare);
closePopUpButton.addEventListener('click', closeShare);
copyButton.addEventListener('click', copyToClip);

function openShare() {
	openPopUp();
	sharePopUp.style.display = 'block';
}

function closeShare() {
	closePopUp();
	sharePopUp.style.display = 'none';
}