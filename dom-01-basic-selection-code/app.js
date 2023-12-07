// Basics:-
// Query Methods:-
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

// Traversing DOM or DOM Traversal:- 
const ul = document.querySelector('ul');
console.log('ul.children: ', ul.children);
console.log('ul.children[1]: ', ul.children[1]);
console.log('ul.childNodes: ', ul.childNodes);
console.log('firstChild: ', ul.firstChild);
console.log('firstElementChild: ', ul.firstElementChild);
console.log('ul.lastChild: ', ul.lastChild);
console.log('ul.lastElementChild: ', ul.lastElementChild);

const liFirst =  document.querySelector('li');
console.log('liFirst.parentNode: ', liFirst.parentNode);
console.log('liFirst.parentElement: ', liFirst.parentElement); // both output same in almost all cases
console.log("liFirst.closest('body')", liFirst.closest('body')); // for closest ancestor

const uL = li.parentElement;
console.log('uL: ', uL);
console.log('uL.previousSibling: ',uL.previousSibling); // give us the white spaces
console.log('uL.previousElementSibling', uL.previousElementSibling);
console.log('uL.nextSibling', uL.nextSibling);
console.log('uL.nextElementSibling', uL.nextElementSibling);



