import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

console.log(options.defaultDate)

const inputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button');
startBtnEl.disabled = true;

startBtnEl.addEventListener('click', onStartBtnClick);

flatpickr(inputEl, options);


function onStartBtnClick() {

    // if (selectedDates > )

    console.log("hi");
}



