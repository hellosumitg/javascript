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


//Inserting DOM Elements:
list.append('Some text');

const newListEl = document.createElement('li');
newListEl.textContent = 'Item 6';

list.prepend(newListEl);
console.log(list.lastElementChild);

list.lastElementChild.before(newListEl);

list.lastElementChild.after(newListEl);

list.firstElementChild.replaceWith(newListEl);

list.append(newListEl, 'someOtherText');

const secondLi = list.children[1];

newLi.textContent = 'Item 4';

console.log(secondLi.insertAdjacentElement('afterend', newLi));


// Cloning DOM Nodes;-
console.log(newLi.cloneNode(true));
const newLi2 = newLi.cloneNode(true);

list.append(newLi, newLi2);


// Live Node List vs Static Node List
const listItems = list.querySelectorAll('li');
//`querySelector--something---` gives us an array like something(i.e NodeList()[]) with `STATIC Node Lists`
// whenever we change it, it will not change on the screen immediately.
console.log('listItems: ', listItems);

const listItems2 = list.getElementsByTagName('li'); 
// `getElementsBy---Something-----` gives us an array like something(i.e HTMLCollection()[]) with `LIVE Node lists` 
// whenever we change it, it will change on the screen immediately.
console.log('listItems2: ', listItems2);

newLi.textContent = 'Item 7';

list.append(newLi);

