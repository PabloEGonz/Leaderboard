import './style.css';

const refresh = document.querySelector('#refresh');
const listContainer = document.querySelector('#list-container');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Iv4RO4M90HFElzEus2q3/scores/';

const getScores = async (file) => {
  const resp = await fetch(file);
  const response = await resp.json();
  listContainer.innerHTML = '';
  response.result.forEach((ele) => {
    const list = document.createElement('li');
    list.innerHTML = `<spam>${ele.user}</spam><spam>${ele.score}</spam>`;
    listContainer.appendChild(list);
  });
};
getScores(url);

refresh.addEventListener('click', () => getScores(url));

const submit = document.querySelector('#submit');

const addScore = async (file, data) => {
  fetch(file, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const nameV = document.querySelector('#name').value;
  const scoreV = document.querySelector('#score').value;
  addScore(url, {
    user: `${nameV}`,
    score: scoreV,
  });
});
