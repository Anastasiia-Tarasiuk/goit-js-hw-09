const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timer = null;

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);
stopBtnEl.disabled = true;


function onStartBtnClick() {
    startBtnEl.disabled = true;
    stopBtnEl.disabled = false;
    if (startBtnEl.disabled) {
        timer = setInterval(() => {
            bodyEl.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }
}

function onStopBtnClick() {
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
    clearInterval(timer);    
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

