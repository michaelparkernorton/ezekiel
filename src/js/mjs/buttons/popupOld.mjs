document.getElementById('shareButton').addEventListener('click', openPopUp);
document.getElementById('popUpDoneBtn').addEventListener('click', closePopUp);
document.getElementById('donateButton').addEventListener('click', openDonatePopUp);
document.getElementById('donatePopUpDoneBtn').addEventListener('click', closeDonatePopUp);

let sharePopUp = document.querySelector('.sharePopUp');
let donatePopUp = document.querySelector('.donatePopUp')
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
}

export function closeDonatePopUp(){
    overlay.style.display = 'none';
    donatePopUp.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling again
}

export function closePopUp() {
    overlay.style.display = 'none';
    sharePopUp.style.display = 'none';
    document.body.style.overflow = 'auto'; // Allow scrolling again
}