const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanColor = document.querySelector('.color');

// changeBtn.addEventListener('click', () => {
//   body.style.backgroundColor = getRandomHexColor();
//   spanColor.textContent = getRandomHexColor();
// });
let timerId = null;

refs.startBtn.addEventListener('click', onStartClick);

// => {
//   timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//     // console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// refs.startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     body.style.backgroundColor = getRandomHexColor();
//     // console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

refs.stopBtn.addEventListener('click', stopClick);
//     () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
