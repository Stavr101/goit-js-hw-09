import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const currentData = Date.now();
let selectDate = null;

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    selectDate = selectedDates[0];
    if (currentData >= selectedDates[0]) {
      Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

console.log(currentData);
console.log(selectDate);

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    convertMs();
  }, 1000);
});

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// flatpickr(refs.myInput, options);

// // padStart();

// // function timer() {
// //   const today = new Date();
// //   const delta = selectedDates[0] - today;
// //   const seconds = Math.floor(delta / 1000) % 60;
// //   const minutes = Math.floor(delta / 1000 / 60) % 60;
// //   const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
// //   const days = Math.floor(delta / 1000 / 60 / 60 / 24);
// //   if (delta) {
// //     window
// //       .alert('Please choose a date in the future')
// //       .flatpickr(myInput, options);
// //   } else {
// //     refs.days.textContent = days < 10 ? `0${days}` : days;
// //     refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
// //     refs.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
// //     refs.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
// //   }
// // }

// // setInterval(timer, 1000)
