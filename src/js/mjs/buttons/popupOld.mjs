document.getElementById('shareButton').addEventListener('click', openPopUp);
document.querySelector('.donate-button').addEventListener('click', openDonatePopUp);
document.getElementById('popUpDoneBtn').addEventListener('click', closePopUp);

let sharePopUp = document.querySelector('.sharePopUp');
let donatePopUp = document.querySelector('.donate')
let overlay = document.getElementById('overlay');

export function openPopUp() {
    overlay.style.display = 'block';
    sharePopUp.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the pop-up is open
}

export function openDonatePopUp() {
    overlay.style.display = 'block';
    donatePopUp.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the pop-up is open
    document.querySelector('.close-pop-up').addEventListener('click', closePopUp);

}

export function closePopUp() {
    overlay.style.display = 'none';
    sharePopUp.style.display = 'none';
    donatePopUp.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling again
}