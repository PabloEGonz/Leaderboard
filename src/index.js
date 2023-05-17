import './style.css';

const refresh = document.querySelector('#refresh');
const listContainer = document.querySelector('#list-container');
//change name
const get = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Iv4RO4M90HFElzEus2q3/scores/';

refresh.addEventListener('click', () => getScores(get));

async function getScores(file) {
    let resp = await fetch(file);
    let response = await resp.json();
    listContainer.innerHTML = '';
    response.result.forEach(ele => {
        const list = document.createElement('li');
        list.innerHTML = `${ele.user}&nbsp &nbsp &nbsp &nbsp &nbsp ${ele.score}`
        listContainer.appendChild(list);
    });
}



const submit = document.querySelector('#submit');

submit.addEventListener('click', () => console.log('clicked'));

async function addScore(file){

}

