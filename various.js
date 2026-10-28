/**
 * fot a given string tell me whether it has even or odd number of characters or not 
 */

function strSize(str){
    const size = str.length;
    console.log(size);
    if(size % 2 === 0){
        console.log('even number');
        return true;
    }else{
        console.log('odd number');
        return false;
    }
}
// strSize('dhaka');
// strSize('faka');

// ==========================================

function checkSize(str) {
    const size = str.length;

    if (size % 2 === 0 || size > 7) {
        return true;
    } else {
        return false;
    }
}
// console.log(checkSize('apple'));


function checkSize(str) {
    const size = str.length;

    if (size >= 5 && size <= 7) {
        return true;
    } else {
        return false;
    }
}
// console.log(checkSize('orange'));


// =================================================

function doubleOrTriple(double, number){
    if(number === true){
        const result = double * 2;
        return result;
    }else{
        const result = double * 3;
        return result;
    }
}
// console.log(doubleOrTriple(10, true));
// console.log(doubleOrTriple(10, false));


function doubleOrTriple(number, isDouble) {
    if (isDouble === true) {
        return number * 2;
    } else {
        return number * 3;
    }
}

// console.log(doubleOrTriple(5, true));  // 10
// console.log(doubleOrTriple(5, false)); // 15

function doubleOrTriple(number, isDouble){
    if(isDouble === true){
         const output = number * 2;
         return output;
    }else{
        const output = number * 3;
        return output;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(3, false));

function checkNumber(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
// console.log(checkNumber(8));
// console.log(checkNumber(7));


function width(size){
    console.log(size);
    const numWidth = size.length;
    console.log(numWidth);
    if(numWidth >= 5){
        console.log('even number', size);
        return true;
    }
    else{
        console.log('odd number',size);
        return false;
    }
}
// width('dhaka');
// width('cat');

function sum(a, b){
    const total = a + b;
    console.log(total);
    return total;
} 
// sum(10, 20);
// sum(15, 25);

function findBig(a, b) {
    if (a > b) {
        return a;
    } else {
       return b;
    }
}
// console.log(findBig(10, 20));
// console.log(findBig(90, 20));


function findSmall(a, b) {
    if (a < b) {
        return a;
    } else {
       return b;
    }
}
console.log(findSmall(10, 20)); // 10
console.log(findSmall(90, 20)); // 20
console.log(findSmall(15, 15)); // 15