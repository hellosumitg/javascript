var person = 'Max';
var person = 'Anna'; // this re-declaration in Global scope don't give us error
// which was thrown in the case of `let` and `const` as well as it, then make it `constant`

if (person === 'Anna') {
    // var hobbies = ['Sports', 'Cooking']; // global scope
    let hobbies = ['Sports', 'Cooking']; // Block scope just within this `if-block` 
    // so `let` and `const` works within the `if-block's`, `loop-block's` and `function-block's` 
    // or even say within this `{}` curly braces. 
    console.log(hobbies)
}


function greet() {
    var age = 30;
    var person = 'Manuel';
    console.log(person, age, hobbies);
}

console.log(person, hobbies);

greet();


// In this way `let` and `const` help us clear our intentions to the browser by throwing errors.
// And thus help in writing clean code... So, don't use `var` in Modern Javascript...



