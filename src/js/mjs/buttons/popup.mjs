const overlay = document.getElementById('overlay');
const popUp = document.querySelector('.popUp');
export function openPopUp() {
    overlay.style.display = 'block';
    popUp.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the pop-up is open
}
export function closePopUp() {
    overlay.style.display = 'none';
    popUp.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling again
}

