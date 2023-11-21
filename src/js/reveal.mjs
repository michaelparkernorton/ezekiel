let revealElement = document.querySelector('.bottom-buttons');
let watchElement = document.querySelector('.watch');
let watchElementBottom;
let active = false;

export function reveal() {	
	watchElementBottom = watchElement.getBoundingClientRect().bottom;
	// console.log(watchElementBottom);
	if (watchElementBottom < 0 && !active) {
		revealElement.classList.add('active');
		active = true;
	} 
	else if (watchElementBottom > 0 && active) {
		revealElement.classList.remove('active');
		active = false;
	}
}
