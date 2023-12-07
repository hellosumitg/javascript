// const task1 = document.querySelector('li');
// const task1 = document.getElementById('task-1');
// const task1 = document.querySelectorAll('li')[0];
const task1 = document.querySelector('#task-1');

task1.style.color = 'white';
task1.style.backgroundColor = 'black';

// const task2 = document.querySelector('title');
const task2 = document.head.querySelector('title');
task2.textContent = "Assignment - Solved!";

// const task3 = document.querySelector('h1');
// task3.textContent = "Assignment - Solved!";
const task3 = document.getElementsByTagName('h1'); // this will give us a collection of elements(array of objects) 
task3[0].textContent = "Assignment - Solved!";



