import Notiflix from 'notiflix';

const inputDelayEl = document.querySelector('[name="delay"]');
const inputStepEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');
const formEl = document.querySelector('form');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  generatePromises(Number(inputDelayEl.value), Number(inputStepEl.value), Number(inputAmountEl.value));
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)

  });
}


function generatePromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
