import Notiflix from 'notiflix';

const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('form');
let timerId = null;



formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  let counter = 0;
  let delayWithStepNumber = Number(inputDelayEl.value);
  
  timerId = setInterval(() => {
    counter += 1;
    if (counter >= inputAmountEl.value) {
      clearInterval(timerId);
    }
    createPromise(counter, delayWithStepNumber);
    delayWithStepNumber += Number(inputStepEl.value);

    console.log(delayWithStepNumber);

    
  }, delayWithStepNumber);
  
}


function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}