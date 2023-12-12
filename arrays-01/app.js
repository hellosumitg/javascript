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