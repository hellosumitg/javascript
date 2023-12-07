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
section.innerHTML = '<h2> A new title </h2>'