let revealElement = document.querySelector('.bottom-buttons');
let watchElement = document.querySelector('.watch');
let watchElementBottom;
let inactive = true;

export function reveal() {	
	watchElementBottom = watchElement.getBoundingClientRect().bottom;
	// console.log(watchElementBottom);
	if (watchElementBottom < 0 && inactive) {
		revealElement.classList.remove('inactive');
		inactive = false;
	} 
	else if (watchElementBottom > 0 && !inactive) {
		revealElement.classList.add('inactive');
		inactive = true;
	}
}
