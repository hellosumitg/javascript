// Sets(is another iterable data structure along with arrays, maps and objects):-
const ids = new Set(['Hi', 'from', 'set!']); // inside this we can put any type of iterables
console.log(ids);
console.log(ids[1]); // outputs undefined `accessing with index value` don't works here as it not sequential

console.log('Check" Hi": ', ids.has('Hi'));

ids.add('Hi'); // not able to add duplicate to sets
console.log(ids);

// `.entries()` sets an iterator and prints iterators along with items 
console.log('Outputs by "ids.entries():', ids.entries());

for (const entry of ids.entries()) {
  console.log(entry);
}

// `.values()` sets an iterator and prints items only
console.log('Output from "ids.values()": ', ids.values());

for (const entry of ids.values()) {
    console.log(entry);
}

if (ids.has('Hi')) {
    ids.delete('Hi');
}

console.log('After deleting "Hi": ', ids);

// Weak set has very less `methods` available
let person = {name: 'Max'};
const persons = new WeakSet(); // in WeakSet() entry should always be an `object`
persons.add(person);

// used in ... some operations where we want the data to let go in `garbage collection` whenever browser wants
person = null; // here garbage collector removes person object from `heap` memory
// if we have used `new Set()` then after making the `person` object to `null` then 
// also JavaScript will hold the value and not throw it to garbage collection even we intended to do so
console.log(persons);
  