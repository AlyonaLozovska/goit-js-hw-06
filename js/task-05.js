const inputField = document.querySelector('#name-input');
const outputfield = document.querySelector('#name-output');

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value.trim() === '') {
    outputfield.textContent = 'Anonymous';
  } else {
    outputfield.textContent = event.currentTarget.value.trim();
  }
};

inputField.addEventListener('input', onInputChange);

