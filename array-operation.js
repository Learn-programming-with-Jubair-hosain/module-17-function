/**
 * Object write a function to give me the all numbers in an array 
 */

function sumNumbers(number){
    let sum = 0;
    for(const total of number){
        // console.log(sum);
        sum = total + sum;
    }
      return sum;
}
const nums = [12, 10, 12,6];
const sum = sumNumbers(nums);
// console.log(sum);


function multiplyNumbers(numbers) {
    let multiplication = 1;
    for(const multi of numbers){
        multiplication = multi * multiplication;
    }
 return multiplication;
}

// console.log(multiplyNumbers([2, 3, 4])); // 24
// console.log(multiplyNumbers([5, 2, 3])); // 30


function sumNumbers(numbers) {
    let total = 0;
    for(const all of numbers){
        total = total + all;
    }
    return total;
}

// console.log(sumNumbers([10, 20, 30])); // 60
// console.log(sumNumbers([5, 5, 5]));    // 15

// ==============================================

function checkPositive(num){
    if(num > 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(checkPositive(10));  // true
// console.log(checkPositive(-5));  // false
// console.log(checkPositive(0));   // false

// ==============================================

//  Return all the even,odd numbers of an array //


function evenNumber(numbers){
    let array = [];
    for(const number of numbers){
        if(number % 2 === 0){
            // console.log(number);
            array.push(number);
        }
    }
    return array;
}
const number = [5,6,8,91,24];
const even = evenNumber(number);
// console.log(even);


function evenSum(numbers){
    let sum = 0;
    for(const num of numbers){
        if(num % 2 === 0){
            // console.log(num);
            sum = sum + num;
        }
    }
    return sum;
}
const numb = [4,13,16,8,5];
const evenTotal = evenSum(numb);
// console.log(evenTotal);



// function oddNum(numbers){
//     const odd = [];
//     for(const number of numbers){
//         if(number % 2 !== 0){
//             odd.push(number);
//         }
//     }
//     return odd;
// }
// const oddNums = [5, 6, 8, 9, 24, 31];
// const result = oddNum(oddNums);
// console.log(result);


function evenOdd(numbers) {
    const even = [];
    const odd = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number);
        } else {
            odd.push(number);
        }
    }
    return [even, odd];
}
const numbers = [2, 5, 8, 11, 14, 17];
const result = evenOdd(numbers);
console.log(result);



function evenOddSum(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            evenSum = evenSum + num;
        } else {
            oddSum = oddSum + num;
        }
    }
    return [evenSum, oddSum];
}
console.log(evenOddSum([10, 15, 20, 25, 30]));