const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
ingredients.map(elem => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = elem;
  ulEl.append(itemEl);
})
