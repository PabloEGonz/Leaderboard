import './style.css';

const refresh = document.querySelector('#refresh');
const listContainer = document.querySelector('#list-container');
// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Iv4RO4M90HFElzEus2q3/scores/';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WhSVZJ1hNHtociMUBK4l/scores/';


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
document.addEventListener("DOMContentLoaded", () => getScores(url));


refresh.addEventListener('click', () => getScores(url));

const submit = document.querySelector('#submit');

const addScore = async (file, data) => {
    const responses = await fetch(file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return responses.json();
};

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name');
    let score = document.querySelector('#score');
    addScore(url, {
        user: `${name.value}`,
        score: score.value,
    }).then((data) => {
        displayMessage(data);
    })
    name.value = '';
    score.value = '';

});

const messageC = document.querySelector('#message-container')

const displayMessage = (mes) => {
    messageC.innerHTML = '';
    const text = document.createElement('p');
    if (mes.result) {
        text.innerHTML = mes.result;
        text.classList.add('success');
    } else {
        text.innerHTML = mes.message;
        text.classList.add('error');
    }
    messageC.appendChild(text)

    setTimeout(() => messageC.innerHTML = '', 3000);
};
