const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');

// section.style.backgroundColor = 'blue';
// section.className = '';
section.className = 'red-bg';

const button = document.querySelector('button');
button.addEventListener('click', () => {
  // Manual way:-
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // Automatic way using `.classList.methods()`
  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

// Adding Elements via HTML in Code
// section.textContent = 'New content!';
// section.innerHTML = '<h2> A new title </h2>' // not that useful when we just want to change a particular element in the node 
// as it will change all the elements in that node whether parent or 
// also it rerenders the whole node which is not that great for bigger website and causes performance issues look at below example
const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Item 4</li>';

// So in place of `.innerHTML` we can use:-
const div = document.querySelector('div');
div.insertAdjacentHTML('beforeend', '<p>Something went wrong!</p>')

console.log(div.querySelector('p'))

const newLi = document.createElement('li');
list.appendChild(newLi);

newLi.textContent = 'Item 5';