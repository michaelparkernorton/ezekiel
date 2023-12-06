// For PopUp Buttons
document.getElementById('shareButton').addEventListener('click', openPopUp);
document.getElementById('popUpDoneBtn').addEventListener('click', closePopUp);

// For Copy To Clipboard button
document.getElementById('copyButton').addEventListener('click', copyToClip);

// For PopUp Buttons
var popUp = document.querySelector('.sharePopUp');
var overlay = document.getElementById('overlay');
export function openPopUp() {
    overlay.style.display = 'block';
    popUp.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the pop-up is open
}
export function closePopUp() {
    overlay.style.display = 'none';
    popUp.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling again
}

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