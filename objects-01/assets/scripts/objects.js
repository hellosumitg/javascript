const person = {
    name: 'Max', // property
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
// whereas `undefined` is a value that javascript assigns to unintitialised variables.
person.age = null; // used to reset something or clear something

console.log(person);