// In every objects `keys` like below `first name`, `age`, `hobbies` and `greet` are `string` 
// on the other hand their corresponding `values` can be of any data types.
let person = {
  'first name': 'Max', // property and this way is only exclusive to objects and not to variables 
  age: 30, // property
  hobbies: ['Sports', 'Cooking'], // property
  greet: function() { // method
    alert('Hi there!');
  }
};  

// Adding, Modifying & Deleting Properties

console.log(person.isAdmin); // when it's not added gives `undefined` as output
person.isAdmin = true; // adding new value
person.age = 31; // changing the older value
delete person.age; // deletes `age` property is like setting it's value to `undefined`
// person.age = undefined; // we never use this to assign a value to a property
// (as it means technically there is no property named `age` present in the `person` object)
// whereas `undefined` is a value that javascript assigns to uninitialized variables.
person.age = null; // used to reset something or clear something

console.log(person);


// Special Key Names & Square Bracket Property Access:-
console.log('First Name: ', person['first name']); // In this case for retrieving or accessing any `key(i.e property of an object)` 
// we will use the same way we did in the case of `arrays` as both are `objects`.

// as 
const movieList = document.getElementById('movie-list');
// movieList.style.backgroundColor = 'red'; // as we had learned earlier, retrieving or accessing `key's(i.e 'backgroundColor')` value of `style` object
// but it can also work the same way if written like the below way
// movieList.style['backgroundColor'] = 'red'; // this way is also write for retrieving or accessing `key's(i.e 'backgroundColor')` value of `style` object
movieList.style['background-color'] = 'red'; // writing `key` in the form of `css` way is also right for retrieving or accessing `key's(i.e 'background-color')` value of `style` object
movieList.style.display = 'block';