import { openPopUp, closePopUp } from "./popup.mjs";

const seeAllButton = document.querySelector('.see-all-button');
const sharePopUp = document.querySelector('.sharePopUp');
const closePopUpButton = document.getElementById('popUpDoneBtn');

seeAllButton.addEventListener('click', openShare);
closePopUpButton.addEventListener('click', closeShare);

function openShare() {
	openPopUp();
	// sharePopUp.style.display = 'flex';
}

function closeShare() {
	closePopUp();
	// sharePopUp.style.display = 'none';
}