const listContainer = document.querySelector('#list-container');

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
export default getScores; 