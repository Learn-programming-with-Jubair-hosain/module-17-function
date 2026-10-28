function sum(number){
    const total = number * 12;
    return(total);
}
const result = sum(5);
// console.log(result);

function doubled(doublet){
    const total = doublet + 50;
    return(total);
}
const result2 = doubled(40);
// console.log(result2);

function sum2(a,b){
    const total2 = a + b;
    return(total2);
}
const output = sum2(10, 20);
console.log(output);

function square(num){
    const number = num * num;
    return(number);
}
const answer = square(5);
console.log(answer);

function remainder(a,b){
    const remaind = a % b;
    return(remaind);
}
const remainderAns = remainder(20, 6);
const remainderAns2 = remainder(11, 4);
console.log(remainderAns, remainderAns2);

// shortcut
function sum(a, b) {
    return a + b;
}
const totalSum = sum(45, 25);
console.log(totalSum);



////// Recap and conditional return of odd and even ////


function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(7));

function even(number){
    if(number % 2 === 0){
        return number;
    }
    else{
        return 'odd number';
    }
}
console.log(even(8));
console.log(even(7));

function checkOdd(num) {
    if(num % 2 === 1){
        return true;
    }
    return false;
}

console.log(checkOdd(7));  
console.log(checkOdd(4));  
console.log(checkOdd(9));  

function sumCheck(a, b) {
    if((a + b ) % 2 === 0){
        return 'even number';
    }
    else{
        return 'odd number';
    }
}

console.log(sumCheck(10, 20)); 
console.log(sumCheck(5, 8));   



function countEven(a, b, c) {
    let count = 0;

    if (a % 2 === 0) {
        count++;
    }
    
    if (b % 2 === 0) {
        count++;
    }
    if (c % 2 === 0) {
        count++;
    }
    return count;

}
console.log(countEven(2, 4, 7)); // 2
console.log(countEven(1, 3, 5)); // 0
console.log(countEven(2, 6, 8)); // 3


function countOdd(a, b, c) {
    let count = 0;

    if (a % 2 === 1) {
        count++;
    }
    
    if (b % 2 === 1) {
        count++;
    }
    if (c % 2 === 1) {
        count++;
    }
    return count;

}
console.log(countOdd(2, 4, 7)); // 2
console.log(countOdd(1, 3, 5)); // 0
console.log(countOdd(2, 6, 8)); // 3