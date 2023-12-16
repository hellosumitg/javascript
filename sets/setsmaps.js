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
  