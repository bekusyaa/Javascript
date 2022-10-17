"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console. log(number);

const obj = {
    a: 50
};

obj.a = 10;
 
console.log(obj);

alert(5);
[].push('a');



const vehicleBodyWidth = 5000;
const vehicleBodyLenght = 4000;

console.log("width of car body: " + vehicleBodyWidth + ', lenght' + vehicleBodyLenght);


// Request 
// data 
// response


// snake_case 
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

let COLOR_RED = 'F00';


let equation = 4.6;

console.log(-4/0);
console.log('string' * 4);

const person = "string"; // for strings 

const bool = true;
const bool1 = false; // for boolen types of data

const obj2 = {
    name: "John",
    age: 25, 
    isMarried: false
};

console.log(obj2.name);
// it's an object it uses {} to put smt in. and to show something you need write
//console.log(name of the variable the (...) then what you wanna show);


let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];




console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


const arrs = [1, 2, 3];
const arrObj = {
    a: 1, 
    1: 2,
    c: 3
};

arrObj.b = '1234';

console.log(arrObj.b);

console.log(arrs[0]);
console.log(arrs[1]);
console.log(arrObj.a);
console.log(arrObj[1]);



// const obj3 = {a: 1, b: 2};
// console.log(obj3.a);


alert('Hello'); 

const result = confirm("are you here?");
console.log(result);

const answer = prompt("are you 18", "18");
console.log(answer);


 const answers = [];

 answers[0] = prompt('What are name?', '');
 answers[1] = prompt('What is your last name?', '');
 answers[2] = prompt('How old are you?', '');



const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user ="Ivan";
alert(`Hello, ${user}$.`);

console.log('arr'+" - object");
console.log(4 + 5);

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(2*4 == 8);


const isChecked = true,
      isClose = true,
      notClosed = false;

console.log(isChecked && isClose && !notClosed);

const itChecked = true,
      itClose = false;

console.log(itChecked || itClose);


 if (4 == 9) {
    console.log('Ok!');
 } else {
    console.log('Error');
 }

 if (4 == 4) {
    console.log('Ok!');
 } else {
    console.log('Error');
 }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('A lot');
// } else {
//     console.log('Ok!');
// }


// switch (numm) {
//     case 49:
//         console.log("incorrect");
//         break;
//     case 100:
//         console.log("incorrect");
//         break;
//     case 50:
//         console.log("correct");
//         break;
//     default:
//         console.log("Not in this time");
//         break;
// }


let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) { 
    console.log(i);
}
