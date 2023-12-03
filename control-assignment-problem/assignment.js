const randomNumber1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber1 >= 0.7){   
    alert(`Random number ${randomNumber1} is greater than 0.7 !`)
}

const arr = [1, 2, 3, 4, 5]

console.log('-----for-loop-----');
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log('-----for-of-loop-----');
for ( const num of arr){
    console.log(num);
}

console.log('-----while-loop');
let counter = 0;
while (counter < arr.length){
    console.log(arr[counter]);
    counter++;
}

console.log('-----for-loop-reverse----');
for (let i = arr.length - 1; i >= 0 ; i--){
    console.log(arr[i]);
}

const randomNumber2 = Math.random();

console.log(randomNumber1);
console.log(randomNumber2);

if (
    (randomNumber1 > 0.7 && randomNumber2 > 0.7) ||
    randomNumber1 <= 0.2 ||
    randomNumber2 <= 0.2
){
    alert('Greater than 0.7 or smaller than 0.2')
}