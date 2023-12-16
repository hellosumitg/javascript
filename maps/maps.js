// Maps(is another iterable data structure along with arrays, sets and objects):-
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

// format const personData = new Map([['key', 'some value']]);
const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]); // it can take `array` or `array of arrays`

// for adding one more object to personData
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);

// for getting any particular object using object as a key not any `index` value as a key
console.log('personData.get(person1) outputs: ', personData.get(person1));

// outputting all information of a map in 3 different forms:-

for (const entry of personData.entries()) {
    console.log(entry);
}
  
// now we are going to destructing `entry` into [key, value]
// Way 1
for (const [key, value] of personData.entries()) {
  console.log('"key": "value" together => ', key, value);
}

// Way 2
for (const key of personData.keys()) {
  console.log(key);
}

// Way 3
for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size); // size is a property