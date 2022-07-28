import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const myInput = document.querySelector('#datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (this.defaultDate > selectedDates[0]) {
      window.alert('Please choose a date in the future');
      // .flatpickr(myInput, options);
    }
  },
};

flatpickr(myInput, options);

// function timer() {
//   const today = new Date();
//   const delta = selectedDates[0] - today;
//   const seconds = Math.floor(delta / 1000) % 60;
//   const minutes = Math.floor(delta / 1000 / 60) % 60;
//   const hours = Math.floor(delta / 1000 / 60 / 60) % 24;
//   const days = Math.floor(delta / 1000 / 60 / 60 / 24);
//   if (delta) {
//     window
//       .alert('Please choose a date in the future')
//       .flatpickr(myInput, options);
//   } else {
//     refs.days.textContent = days < 10 ? `0${days}` : days;
//     refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//     refs.minutes.textContent = minutes < 10 ? `0${minutes}` : minutes;
//     refs.seconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
//   }
// }

// setInterval(timer, 1000)
