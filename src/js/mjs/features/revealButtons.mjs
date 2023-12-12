const revealElement = document.querySelector('.bottom-buttons');
const watchElement = document.querySelector('.watch');
let watchElementBottom;
let active = false;

// Have donation and share buttons reappear on mobile devices at the bottom of the screen
export function revealButtons() {
	watchElementBottom = watchElement.getBoundingClientRect().bottom;

	// Check to see if screen is not a desktop
	if (window.innerWidth < 1024) {
		
			// If the bottom of the button goes off the screen show the other buttons
			if (watchElementBottom < 0 && !active) {
				revealElement.classList.add('active');
				active = true;
				console.log('active');
				
			// If the buttom of the button reappears hide the other buttons
			} else if (watchElementBottom > 0 && active) {
				revealElement.classList.remove('active');
				active = false;
				console.log('inactive');
				
			}
	}
}
