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
    // Select the text in the textarea
    var textArea = document.getElementById('textToCopy');
    navigator.clipboard.writeText(textArea.innerText);
    alert("Text copied!")
    closePopUp();
}