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