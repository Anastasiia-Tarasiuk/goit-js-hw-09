import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let timer = null;

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button');
const spanDaysEl = document.querySelector('[data-days]');
const spanHoursEl = document.querySelector('[data-hours]');
const spanMinutesEl = document.querySelector('[data-minutes]');
const spanSecondsEl = document.querySelector('[data-seconds]');

startBtnEl.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);

        // if (selectedDates[0] < this.defaultDate) ЧОМУ this не працює???
        if (selectedDates[0] < options.defaultDate) {
            alert("Please choose a date in the future");
        } else {
            startBtnEl.disabled = false;
        }

        let deltaTime = selectedDates[0] - options.defaultDate;

        const convertedTime = convertMs(deltaTime);

        console.log(convertedTime);

        const { days, hours, minutes, seconds } = convertedTime;

        spanDaysEl.textContent = days;
        spanHoursEl.textContent = hours;
        spanMinutesEl.textContent = minutes;
        spanSecondsEl.textContent = seconds;

    },
};




startBtnEl.addEventListener('click', onStartBtnClick);

flatpickr(inputEl, options);


function onStartBtnClick() {
    timer = setInterval(() => {
        console.log("hi");
       
        console.log(options.onClose());
    }, 1000);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
   return String(value).padStart(2, '0');
}

