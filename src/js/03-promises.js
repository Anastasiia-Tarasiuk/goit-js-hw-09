const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');
// const btnEl = document.querySelector('button');
const formEl = document.querySelector('form');
let timerId = null;



formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  
  let counter = 0;
  
  

    timerId = setInterval(() => {
      counter += 1;
      if (counter >= inputAmountEl.value) {
        clearInterval(timerId);
      }
      createPromise("0", inputDelayEl.value);
    }, inputDelayEl.value);
}


function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
