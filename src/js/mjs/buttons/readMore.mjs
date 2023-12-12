const missionPreview = document.querySelector('.missionPreview');
const fullMission = document.querySelector('.fullMission');
const readMoreBtn = document.querySelector('.readMore');
const readLessBtn = document.querySelector('.readLess');

readMoreBtn.addEventListener('click', readMore);
readLessBtn.addEventListener('click', readLess);

export function readMore() {
  missionPreview.style.display = 'none';
  fullMission.style.display = 'block';
  readMoreBtn.style.display = 'none';
  readLessBtn.style.display = 'block';
}

export function readLess() {
  missionPreview.style.display = 'block';
  fullMission.style.display = 'none';
  readMoreBtn.style.display = 'block';
  readLessBtn.style.display = 'none';
}