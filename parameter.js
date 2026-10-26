// A function parameter is a named variable listed inside the parentheses of a function definition

function square(number){
    const square2 = number * number;
    console.log('Square of the given number is:',square2);
}
square(4);
square(5);
square(10);

function sum(a,b){
    const totalSum = a + b;
    console.log(totalSum);
}
sum(10,30);
sum(70,30);

function allAdd(num1,num2,num3,num4){
    const totalNum = num1 + num2 + num3+ num4;
    console.log(totalNum);
}
allAdd(20,25,25,30);

function division(i,j,k){
    const ans = i / j + k;
    console.log(ans);
}
division(30,5,4);

function remainder(num7,num8){
    const remainder2 = num7 % num8;
    console.log(remainder2);
}
remainder(7,3);
remainder(15,3);
remainder(14,6);

function doubled(numbers){
    const doublet = numbers * 9;
    console.log(doublet);
}
doubled(9);

const numbers = 8;
doubled(numbers);
