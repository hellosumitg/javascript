// Different ways of creating arrays:-
const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array('Hi!', 'Welcome!');
console.log(moreNumbers);

const strangeArray1 = new Array(5); // keep this in mind here 5 is considered as length of array
console.log(strangeArray1);

const strangeArray2 = Array(5); // keep this in mind here 5 is considered as length of array
console.log(strangeArray2);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const newMoreNumbers = Array.from('Hi!');
console.log(newMoreNumbers);

const listItems = document.querySelectorAll('li'); // these are `NodeList` but not array
console.log(listItems); // this `Array.from(listItems)` converts them to array

const arrayListItems = Array.from(listItems); 
console.log(arrayListItems); // this is array


// What type of Data we can store in arrays ?

const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetails: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData) {
    for (const dataPoint of data){
        console.log(dataPoint);
    }
}

console.log(personalData[1]); // length is always `index + 1`


// Adding and removing elements:-
console.log(hobbies);
hobbies.push('Reading');
console.log("push: 'Reading' pushes element to the last index of an array ", hobbies);
hobbies.unshift('Coding'); // slow in speed then `push("")` and `pop()`
console.log("unshift 'Coding' : shifts one element to the right and adds the element or adds element on the 0th index", hobbies);
hobbies.pop();
console.log("pop: pops last element ", hobbies);
hobbies.shift(); // slow in speed then `push("")` and `pop()`
console.log("shift: shifts element by one index to left or remove the 0th index element", hobbies);

hobbies[1] = 'Coding';
console.log("adds one element(i.e 'Coding') on 1st index: ", hobbies);

hobbies[5] = 'Reading'; // Rarely used but nice to know
console.log(hobbies, "hobbies[4] gives undefined: ", hobbies[4]);

console.log('hobbies[-1] outputs:', hobbies[-1]); // gives undefined as -ve indexing not allowed


// `splice()` method is only available for `Real Arrays` not on `Iterables` nor on `Array like objects` 
// For using `splice()` one should convert `Iterables` or `Array like objects` to `Array` using `Array.from(`Iterable` or `Array like object`)`
hobbies.splice(2, 3, 'Good Food', 'Sports'); // 1st place for `index number(i.e Start looking from this...)`, 2nd place for `number of elements you want to delete`
// and on 3rd place we can add as many `numbers or items` as we can at the place of deleted ones `index`in this case `0th` place.
console.log(hobbies);

// using `splice()` for removing element:
hobbies.splice(0, 2); // deletes 2 items starting from 0th index
console.log(hobbies);

hobbies.splice(2); // deletes all staring and including from 2nd index
console.log(hobbies);

hobbies.splice(-1, 1); // deletes 1 item starting from last index item
console.log(hobbies);


// `.slice()`:
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResults.slice()); // `.slice()` returns a brand new similar array (i.e produces a copy of the same array) as
// arrays are objects(i.e `Reference value`)

testResults.push(3.5);
const storedResults1 = testResults; // basically stores a `pointer`(i.e naming `testResults`) to the `address` in the memory
// where the values of the above array is stored
console.log(storedResults1, testResults);


const storedResults2 = testResults.slice(0); // starts from index 0 to all the way to end
testResults.push(7.8);
console.log('storedResults2: ', storedResults2);
console.log('testResults:', testResults);

const storedResults3 = testResults.slice(0, 2);// 1st place starting index and 2nd place is index upto which we select excluding the 2nd place Index item
console.log(storedResults3);

const storedResults4 = testResults.slice(3, 0); // empty as index should not be in reversed order
console.log(storedResults4);

const storedResults5 = testResults.slice(-3, -1);
console.log(storedResults5);


// Adding arrays to arrays with `concat()`:-
testResults.push([2, 5.3]); //pushes in the same array
console.log("testResults: ", testResults);

const storedResults6 = testResults.concat([3, 4, 6.7]); // creates a copy of the array(i.e new array) and actually merge the given array with the given array
console.log("storedResults6: ", storedResults6);
console.log("testResults: ", testResults);

// `.indexOf()` or `lastIndexOf()` which works well with `Primitive` values as shown below:-
//  but not works well with `Reference` values

testResults.pop()
console.log("testResults: ", testResults);
// Searching from the left(i.e from 0th index):-
console.log('Index of `1.5`in testResults: ', testResults.indexOf(1.5)); // here we will search `1.5` in the whole array starting from `0th` index
console.log('Index of `10.99`in testResults: ', testResults.indexOf(10.99, 2)); // // here we will search `10.99` in the whole array starting from `2nd` index

// Searching from the right(i.e from last index)
console.log('Last Index of `-5`in testResults: ', testResults.lastIndexOf(-5)); // here we will search `1.5` in the whole array starting from last index
console.log('Last Index of `10.99`in testResults: ', testResults.lastIndexOf(10.99, -2)); // // here we will search `10.99` in the whole array starting from `-2nd` index

const personData = [{name: "Max"}, {name: 'Manuel'}];
console.log('Index of `Manuel`: ', personData.indexOf({name: 'Manuel'})); // returns `-1` which is the output for both `indexOf()` or `lastIndexOf()` when they are unable to find anything
console.log('Index of `Manuel`: ', personData.lastIndexOf({name: 'Max'})); // returns `-1` which is the output for both `indexOf()` or `lastIndexOf()` when they are unable to find anything
// The reason behind this is `Reference` value thing in case of objects