// import { importData } from "./fetchHTML.mjs";

document.getElementById('readMoreBtn').addEventListener('click', readMore);
document.getElementById('readLessBtn').addEventListener('click', readLess);

var preview = document.querySelector('.missionPreview');
var full = document.querySelector('.fullMission');
var readMoreBtn = document.querySelector('.readMore');
var readLessBtn = document.querySelector('.readLess');

export function readMore() {
  preview.style.display = 'none';
  full.style.display = 'block';
  readLessBtn.style.display = 'block';
  readMoreBtn.style.display = 'none';
}

export function readLess() {
  preview.style.display = 'block';
  full.style.display = 'none';
  readLessBtn.style.display = 'none';
  readMoreBtn.style.display = 'block';
}

