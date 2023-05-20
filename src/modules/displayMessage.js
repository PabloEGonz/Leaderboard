const name = document.querySelector('#name');
const score = document.querySelector('#score');

const messageC = document.querySelector('#message-container');
const displayMessage = (mes) => {
  messageC.innerHTML = '';
  const text = document.createElement('p');
  if (mes.result) {
    text.innerHTML = mes.result;
    text.classList.add('success');
    name.value = '';
    score.value = '';
  } else {
    text.innerHTML = mes.message;
    text.classList.add('error');
  }
  messageC.appendChild(text);
  setTimeout(() => {
    messageC.innerHTML = '';
  }, 3000);
};

export default displayMessage;