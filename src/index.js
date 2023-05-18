import './style.css';
import getScores from './modules/getScores.js'
import addScore from './modules/addScore.js';
import displayMessage from './modules/displayMessage.js';

const refresh = document.querySelector('#refresh');
const submit = document.querySelector('#submit');
const name = document.querySelector('#name');
const score = document.querySelector('#score');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Iv4RO4M90HFElzEus2q3/scores/';

document.addEventListener('DOMContentLoaded', () => getScores(url));

refresh.addEventListener('click', () => getScores(url));

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(url, {
    user: `${name.value}`,
    score: score.value,
  }).then((data) => {
    displayMessage(data);
  });
});

export {name, score};
