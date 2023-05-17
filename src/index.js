import './style.css';

const refresh = document.querySelector('#refresh');
const listContainer = document.querySelector('#list-container');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Iv4RO4M90HFElzEus2q3/scores/';

refresh.addEventListener('click', () => getScores(url));

const getScores = async (file) => {
    let resp = await fetch(file);
    let response = await resp.json();
    listContainer.innerHTML = '';
    response.result.forEach(ele => {
        const list = document.createElement('li');
        list.innerHTML = `${ele.user}&nbsp &nbsp &nbsp &nbsp &nbsp ${ele.score}`
        listContainer.appendChild(list);
    });
}
getScores(url);



const submit = document.querySelector('#submit');



const addScore = async (file, data) => {
    const responses = await fetch(file, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return responses.json();
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const nameV = document.querySelector('#name').value;
    const scoreV = document.querySelector('#score').value;
    addScore(url, {
        user: `${nameV}`,
        score: scoreV
    }).then((data) => {
        console.log(data.message)
    })
        .catch((data) => {
            console.log('error' + data.message)
        })
});

