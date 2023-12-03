// var person = 'Max';
// var person = 'Anna'; // this re-declaration in Global scope don't give us error
// // which was thrown in the case of `let` and `const` as well as it, then make it `constant`

// if (person === 'Anna') {
//     // var hobbies = ['Sports', 'Cooking']; // global scope
//     let hobbies = ['Sports', 'Cooking']; // Block scope just within this `if-block` 
//     // so `let` and `const` works within the `if-block's`, `loop-block's` and `function-block's` 
//     // or even say within this `{}` curly braces. 
//     console.log(hobbies)
// }


// function greet() {
//     var age = 30;
//     var person = 'Manuel';
//     console.log(person, age, hobbies);
// }

// console.log(person, hobbies);

// greet();


// // In this way `let` and `const` help us clear our intentions to the browser by throwing errors.
// // And thus help in writing clean code... So, don't use `var` in Modern Javascript...


// Hoisting:-

// console.log(userName);

// var userName = 'Max'; // this just give us `undefined` as output
// because browser brings the `variable` declaration above the `variable used` place
// and this is called `Hoisting` 


// In case of `let` and `const` browser do the same thing but throws error as shown below
// let userName = 'Max'; // this will give us below error as output
/* 
    app.js:30 Uncaught ReferenceError: Cannot access 'userName' before initialization
    at app.js:30:13
    (anonymous) @ app.js:30
*/


