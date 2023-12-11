// For PopUp Buttons
var overlay = document.getElementById('overlay');
export function openPopUp() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the pop-up is open
}
export function closePopUp() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling again
}

