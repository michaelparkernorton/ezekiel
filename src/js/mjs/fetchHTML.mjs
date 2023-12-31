const header = document.querySelector('.header');
const topButtons = document.querySelector('.topButtons');
const story = document.querySelector('.story');

importData(header, './partials/header.html');
importData(topButtons, './partials/topButtons.html');
importData(story, './partials/story.html');

export function importData(selector, reference) {
	fetch(reference)
	.then(res=>res.text())
	.then(data=>{
			selector.innerHTML=data
	})
}