
// Hoisting:-

console.log(userName);

var userName = 'Max'; // this just give us `undefined` as output
// because browser brings the `variable` declaration above the `variable used` place
// and this is called `Hoisting` 


// In case of `let` and `const` browser do the same thing but throws error as shown below
let userName = 'Max'; // this will give us below error as output
/* 
    app.js:30 Uncaught ReferenceError: Cannot access 'userName' before initialization
    at app.js:30:13
    (anonymous) @ app.js:30
*/


