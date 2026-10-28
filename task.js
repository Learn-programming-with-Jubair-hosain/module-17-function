/**
 * Task-1
 * Take four parameters. Multiply the four numbers and then return the result
 */

function multiply(a,b,c,d){
    const multiply2 = a*b*c*d;
    return multiply2;
}
const result = multiply(2,4,6,8);
// console.log(result);


/**
 * Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function number(numbers){
    if(numbers % 2  !== 0){
        const result = numbers * 2;
        return result;
    }
    else{
        const result = numbers / 2;
        return result;
    }
}
// console.log(number(11));
// console.log(number(10));


/**
 * Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(average){
    let aver = 0;
    for(const num of average){
        aver = aver + num;
    }
    return aver / average.length;
}
console.log(make_avg([10, 20, 30])); // 20
console.log(make_avg([5, 10, 15]));  // 10


function make_avg(arr, size) {
    let total = 0;
    for (const num of arr) {
        total = total + num;
    }
    return total / size;
}
// console.log(make_avg([10, 20, 30], 3)); // 20
// console.log(make_avg([5, 10, 15], 3));  // 10
// console.log(make_avg([10, 20, 30, 40], 4)); // 25



// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. 

function count_zero(binary) {
    let count = 0;
    for (const num of binary) {
        if (num === "0") {
            count++;
        }
    }
    return count;
}
// console.log(count_zero("010101")); // 3
// console.log(count_zero("00011"));  // 3
// console.log(count_zero("1111"));   // 0



// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd


function odd_even(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(odd_even(10)); // Even
console.log(odd_even(7));  // Odd
console.log(odd_even(4));  // Even
console.log(odd_even(9));  // Odd
