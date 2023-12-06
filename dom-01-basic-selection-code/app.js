// const h1 = document.getElementById('main-title');

const h1 = document.querySelector('h1');

h1.textContent = 'Some new title!';
h1.className = 'title';
console.log(h1.className);
h1.style.color = 'white';
h1.style.backgroundColor = 'red';
h1.id = 'new-title';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body; // for querying `body` element node 

// const listItemElements = document.querySelectorAll('li'); // Older Way
const listItemElements = document.getElementsByTagName('li'); // Newer Way and it reflects the live changes to the element here 'li'

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}