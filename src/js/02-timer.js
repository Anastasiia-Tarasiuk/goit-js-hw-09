import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

let timer = null;
let deltaTime = null;

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

        // if (selectedDates[0] < this.defaultDate) ЧОМУ this не працює???
        if (selectedDates[0] < options.defaultDate) {
            Notiflix.Notify.info('Please choose a date in the future');
        } else {
            startBtnEl.disabled = false;
        }

        deltaTime = selectedDates[0] - options.defaultDate;
    },
};

startBtnEl.addEventListener('click', onStartBtnClick);
flatpickr(inputEl, options);

function onStartBtnClick() {

    timer = setInterval(() => {
        const convertedTime = convertMs(deltaTime);
        
        const { days, hours, minutes, seconds } = convertedTime;
        
        spanDaysEl.textContent = days;
        spanHoursEl.textContent = hours;
        spanMinutesEl.textContent = minutes;
        spanSecondsEl.textContent = seconds;
        
        deltaTime -= 1000;   
 
        if (deltaTime <= 0) {
            clearInterval(timer);
            Notiflix.Notify.success('Congratulations! You have won a prize!');;
        }
        
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


function addLeadingZero(value) {
   return String(value).padStart(2, '0');
}

