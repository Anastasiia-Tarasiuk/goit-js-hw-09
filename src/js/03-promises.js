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
  
  setTimeout(() => {
    counter += 1;
    createPromise(counter, delayWithStepNumber);
    delayWithStepNumber += Number(inputStepEl.value);


    timerId = setInterval(() => {
      counter += 1;
      if (counter >= inputAmountEl.value) {
        clearInterval(timerId);
      }
      createPromise(counter, delayWithStepNumber);
      delayWithStepNumber += Number(inputStepEl.value);

    }, inputStepEl.value);
  }, inputDelayEl.value);

  
  
}


function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}


// РЕФАКТОРИНГ

// function createPromise(position, delay) {

//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;

//     if (shouldResolve) {
//       resolve({ position, delay });
//     } else {
//       reject({ position, delay });
//     }
 
//   })
// }


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });