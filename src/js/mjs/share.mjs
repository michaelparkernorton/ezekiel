import { openPopUp, closePopUp } from "./popup.mjs";

var popUp = document.querySelector('.sharePopUp');

function openShare() {
	openPopUp();
	popUp.style.display = 'block';
}

function closeShare() {
	closePopUp();
	popUp.style.display = 'none';
}

// For PopUp Buttons
document.getElementById('shareButton').addEventListener('click', openShare);
document.getElementById('popUpDoneBtn').addEventListener('click', closeShare);

// For Copy To Clipboard button
document.getElementById('copyButton').addEventListener('click', copyToClip);

// For Copy To Clipboard button
export function copyToClip() {
	var textToCopy = document.getElementById('textToCopy');
	var spanContent = textToCopy.innerText;
	
	navigator.clipboard.writeText(spanContent)
			.then(function() {
					alert('Text copied!');
					closePopUp();
			})
			.catch(function(err) {
					console.error('Unable to copy text', err);
					alert('Unable to copy text');
			});
	// Error with previous copyToClip function. Updated: Without .then and .catch, it would remain "caught in promise"
}