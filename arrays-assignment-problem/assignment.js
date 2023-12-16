const numArray = [1, 23, 4, 67, 34.34]

const numGreaterThan5 = numArray.filter((num, idx, nums)=>{return num > 5})
console.log(numGreaterThan5);

const mappedNumber = numArray.map((val)=>({num: val}));
console.log(mappedNumber);

const product = numArray.reduce((curResult, curValue, curIndex, prices) => {
    return curResult * curValue;
}, 1);
console.log(product);


function findMax (...numArray) {
    let curMax = numArray[0];
    for (const num of numArray) {
        if (num > curMax){
            curMax = num;
        }
    }
    return curMax;
}
console.log(findMax(...numArray));



function findMinMax (...numArray) {
    let curMax = numArray[0];
    let curMin = numArray[0];
    for (const num of numArray) {
        if (num > curMax){
            curMax = num;
        } 
        if (num < curMin) {
            curMin = num
        }
    }
    return [curMin, curMax];
}

const [minValue, maxValue] = findMinMax(...numArray);

console.log(minValue, maxValue);


const ids = new Set(['Hi', 'from', 'set!']); // inside this we can put any type of iterables
ids.add('Sumit');
ids.add('Hi');
ids.add('from')
console.log(ids);