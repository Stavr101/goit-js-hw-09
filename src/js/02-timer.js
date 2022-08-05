import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let d = null;
refs.startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    d = selectedDates[0].getTime();
    const ms = selectedDates[0].getTime() - Date.now();
    if (Date.now() >= selectedDates[0].getTime()) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.myInput, options);
let timerId = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
// function updateClockface({ days, hours, minutes, seconds }) {
// }

function updateClockface({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

refs.startBtn.addEventListener('click', () => {
  refs.startBtn.disabled = true;
  timerId = setInterval(() => {
    const delta = d - Date.now();
    console.log(d);
    if (delta <= 0) {
      clearInterval(timerId);
      return;
    } else {
      const a = convertMs(delta);
      updateClockface(a);
    }
  }, 1000);
});

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   myInput: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('button[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };
// const currentData = Date.now();
// let timerId = null;
// let ms = null;
// refs.startBtn.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     ms = selectedDates[0].getTime() - currentData;

//     if (currentData >= selectedDates[0].getTime()) {
//       Notify.failure('Please choose a date in the future');
//     } else {
//       refs.startBtn.disabled = false;
//     }
//     return ms;
//   },
// };

// flatpickr(refs.myInput, options);

// // function timeOut() {
// //   const getTimeComponent = selectedDate - new Date();
// //   if (getTimeComponent <= 0) {
// //     Notiflix.Notify.success(`Timer is Over!`);
// //     clearInterval(timerId);
// //     return;
// //   }
// //   const { days, hours, minutes, seconds } = convertMs(getTimeComponent);
// //   document.querySelector('span[data-days]').textContent = pad(days);
// //   document.querySelector('span[data-hours]').textContent = pad(hours);
// //   document.querySelector('span[data-minutes]').textContent = pad(minutes);
// //   document.querySelector('span[data-seconds]').textContent = pad(seconds);
// // }
// // function pad(value) {
// //   return String(value).padStart(2, 0);
// // }

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }

// // function updateClockface({ days, hours, minutes, seconds }) {

// // }

// function updateClockface({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }

// refs.startBtn.addEventListener('click', () => {
//   refs.startBtn.disabled = true;
//   setInterval(() => {
//     updateClockface(convertMs(ms));
//   }, 1000);
// });

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   myInput: document.querySelector('#datetime-picker'),
//   startBtn: document.querySelector('button[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// const currentData = Date.now();
// let ms = null;
// refs.startBtn.disabled = true;
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     ms = selectedDates[0].getTime() - currentData;
//     if (currentData >= selectedDates[0].getTime()) {
//       Notify.failure('Please choose a date in the future');
//     } else {
//       refs.startBtn.disabled = false;
//     }
//     return ms;
//   },
// };

// flatpickr(refs.myInput, options);

// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }
// // function updateClockface({ days, hours, minutes, seconds }) {
// // }

// function updateClockface({ days, hours, minutes, seconds }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }

// refs.startBtn.addEventListener('click', () => {
//   refs.startBtn.disabled = true;
//   setInterval(() => {
//     updateClockface(convertMs(ms));
//   }, 1000);
// });
