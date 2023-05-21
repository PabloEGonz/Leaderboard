const listContainer = document.querySelector('#list-container');

const getScores = async (file) => {
  const resp = await fetch(file);
  const response = await resp.json();
  listContainer.innerHTML = '';
  response.result.sort((a, b) => {
    const nameA = a.user.toLowerCase(), nameB = b.user.toLowerCase();
    if (nameA < nameB) return -1
    else if (nameA < nameB) return 1;
    else return 0;
  });
  response.result.sort((a, b) => b.score - a.score);
  response.result.forEach((ele) => {
    const list = document.createElement('li');
    list.innerHTML = `<spam>${ele.user}</spam><spam>${ele.score}</spam>`;
    listContainer.appendChild(list);
  });
};
export default getScores;