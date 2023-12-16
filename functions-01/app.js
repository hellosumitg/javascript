const startGameBtn = document.getElementById('start-game-btn');

// Below way is `Hoisted to top`, can be `declared` anywhere in the file(i.e also after it's used)
// function startGame(){
//     console.log('Game is starting...');
// } // this way of defining a function is called as `Function Declaration/Statement`.


// Below way is `Hoisted to top` but not `initialized/defined`, `can't be declared` anywhere in the file(i.e not after it's used)
// const start = function startGame(){
//     console.log('Game is starting...');
// }; // this way of defining a function is called as `Function Expression`.

// Anonymous Function
// const start = function(){
//     console.log('Game is starting...');
// }; 

// const person = { 
//     name : 'Max', // here `Max`(like a variable) stored in an object `name` known as `property`
//     greet: function greet(){
//         console.log("Hi, there!");
//     } // here 'greet()` stored in an object `greet` known as `method`.
// };

// person.greet();

// console.dir(startGame); // all `functions` are objects that's why stored in `HEAP` memory by browsers

// Below `startGameBtn` is an object and `addEventListener` is a method attached to it. 
startGameBtn.addEventListener('click', function(){
    console.log('Game is starting...');
}); 