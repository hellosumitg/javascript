//  Prototypes are basically "fallback objects" to which other objects can be linked.

class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

// class Person extends AgedPerson {
class Person {
  name = 'Max';

  constructor() {
    // super(); // It basically creates object based on above `AgedPerson` class and then set it as a `prototype` to the object built based on the `Person extends AgedPerson` class
    this.age = 30;
    // this.greet = function() { ... }
  }

  // greet = () => {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' yeacrars old.'
    );
  }
}

// // Below function is a `Constructor function`
// function Person() { // but this is a preferred way
//   // function person () { // both are correct
//   // this = {} // `this` here adds all below `this.` properties and methods(done by `new` keyword in the background)
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
//   // return this; then the `new` keyword returns the above commented `this` in the background
// }

// Person.describe = function () {
//   // this has no impact on what executes the function `Person()` body,
//   console.log('Creating persons...');
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// // right way to edit `prototype` so that it will have `constructor` method
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };
// // Above `fallback` object here for the `Person constructor function`, or any `object literal i.e {}`
// // by default always uses this global `Object` constructor.

// console.dir(Person);
// // `prototype` property does not exist on every object, it exists on `function objects` because Javascript is a prototype-based language.
// // We use `constructor functions` to build objects and whatever we set here
// // Earlier result when we had not set the `prototype` property:-
// // ƒ Person()
// //   arguments: null
// //   caller: null
// //   length: 0
// //   name: "Person"
// //   prototype: {constructor: ƒ} <= look here
// //   [[FunctionLocation]]: app.js:23
// //   [[Prototype]]: ƒ ()
// //   [[Scopes]]: Scopes[2]

// // After setting `Person.prototype` we will get
// // ƒ Person()
// //   arguments: null
// //   caller: null
// //   length: 0
// //   name: "Person"
// //   prototype: {printAge: ƒ} <= look here so when we `extends` one class to other class we basically doing something like this
// //   [[FunctionLocation]]: app.js:23
// //   [[Prototype]]: ƒ ()
// //   [[Scopes]]: Scopes[2]

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p);

// // `__proto__` is present on every object in Javascript, no matter how you created it,
// // no matter if that is a `function object` (i.e a function object which we use as a `constructor function`,
// // an object you build with object literal notation, an object you build with the help of a `constructor function` or an `array`
// // you always have `__proto__` because this shows you the connected prototype,
// console.log(p.__proto__);
// console.log(p.toString());
// console.log(p.__proto__ === Person.prototype);

// const p2 = new p.__proto__.constructor();
// console.log(p2);

// // Keep in Mind! below `prototype` property exists on everything which is a `constructor` function
// console.dir(Object.prototype); // `Object` here is a `constructor` function with a bunch of built-in `properties or methods` and 
// // every object by default uses `prototype` as its fallback value.

// console.dir(Object.prototype.__proto__); // results in `null` as it ends here


// const p3 = new Person();
// console.log(p3); // we can see that `Person.prototype` has `AgedPerson.prototype` which has an `Object` which finally has the `printAge()` method
// // hence, `class` has an extra `prototype` that was added by Javascript.
// const p4 = new Person();
// console.log(p3.__proto__ === p4.__proto__) // gives us true
// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

const course = { // new Object()
  title: 'JavaScript - The Complete Guide',
  rating: 5,
};

console.log(course.__proto__); // works well with older browser
// getting `prototype`
console.log(Object.getPrototypeOf(course)); // new and latest way for looking into the prototype.
// above both `console.log()` output the same

// setting `prototype`
Object.setPrototypeOf(course, {
  // If we would want to keep the original `prototype` and only `add` something to it, we could of course use the spread(...) operator here and access it as shown below
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

// below we are creating an object in a different way
const student = Object.create(
  // The object we pass here (i.e below) as a parameter will be set as a `prototype` for this initial object.
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true,
    },
  }
);

// student.name = 'Max';

Object.defineProperty(student, 'progress', { // here adding a property to an object,
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
