const decrementBtn = document.querySelector("[data-action = 'decrement']");
const incrementBtn = document.querySelector("[data-action = 'increment']");
const spanEl = document.querySelector('#value');

let counterValue = 0;

const changeValue = (step) => {
  counterValue += step;
  spanEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', () => changeValue(-1));
incrementBtn.addEventListener('click', () => changeValue(+1));

