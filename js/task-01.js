const categoriesUl = document.querySelector('#categories');
console.log(`Number Of categories:`, categoriesUl.children.length);
const itemEl = document.querySelectorAll('.item');
itemEl.forEach(element => {
    const title = element.querySelector('h2');
    console.log(`Category: ${title.textContent}`);
    const number = element.querySelectorAll('li');
    console.log(`Elements: ${number.length}`);
})
