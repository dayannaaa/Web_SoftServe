'use strict';
//TODO TASK 2

const array = (length, max) => 
Array(length).fill().map(() => Math.round(Math.random() * max));

//! 1. . Функція приймає масив та виводить його на екран.

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
//// random
// function showArray(_numArr, count = 9) {
//     msg = "Numbers in array:"
//     for (i = 0; i <= count; i++) {
//         msg = msg + " " + _numArr[i];
//     }
//     alert(msg);
// } //// show array

// function genArray() {
//     let numArr = new Array();
//     for (i = 0; i < 10; i++) {
//         numArr[i] = getRandomInt(50);
//     }
//     return numArr;
// }
// let arr = genArray();


// showArray(arr);

//! 2. Функція приймає масив і виводить лише парні елементи.

// let numArr = new Array(11, 12,13,4,5,6,7,8,9,15,22,21,20);
 ////13
// let result = "Numbers in paired array:";
// function evenArray(numArr){
//     for (i = 0; i < 12; i++) {
//         if(numArr[i]%2 === 0){
//         result = result + ' ' + numArr[i];
//     }
// }
//     alert(result);
// }
// evenArray(numArr);

//! 3. Функція перевіряє чи є в масиві число яке кратне 7-ми. 

// const A = (length, max) => 
// Array(length).fill().map(() => Math.round(Math.random() * max))

// console.log(A(10, 100));
// let k = 0;
// function evenArray(numArr){
//     for (let i = 0; i < numArr.length; i++) {

//     if(numArr[i] % 7 === 0){
//         k++;
//         }
//     if(numArr[i] % 7 === 1){
//      continue;
//     }

//     }
//     if(k>=1){
//     console.log(`true`);
//     }else{
//     console.log("The array DOES NOT contain an element that can be divided by 7.");
//     }
// }

// evenArray(A);

//! 4. Функція сортування масива по спаданню. 

// array(10, 100);

// array.sort((a, b) => -a + b);
// console.log("Sorted with custom func:", array);

//! 5. Функція заповнює 2-гу половину масива нулями.

// function showArray(NumArr, count = 9) {
//     msg = "Numbers in array:"
//     for (i = 0; i <= count; i++) {
//         msg = msg + " " + NumArr[i];
//     }
//     alert(msg);
// }

// function setZero(NumArr)
// {
//     for (i = 0; i <= 9; i++) {
//         if (i >= 5) {
//             NumArr[i] = 0;
//         }
//     }
//     showArray(NumArr);
// }

// setZero(array(10, 100));

//! 6. Функція перевіряє чи має масиві однакові елементи

//  function theSameElements(NumArr){
//    NumArr = NumArr.filter((item, index) => NumArr.indexOf(item) != index);
//     if (NumArr.length > 0) {alert("The array contains at least one duplicate.");}
//     else {alert("The array DOES NOT contain at least one duplicate.");}

//  }
//  theSameElements(array(10,100));

//! 7. Функція видалення елемента з масиву за вказаним індексом.
// function showArray(NumArr, count = 9) {
//     msg = "Numbers in array:"
//     for (i = 0; i <= count; i++) {
//         msg = msg + " " + NumArr[i];
//     }
//     alert(msg);
// }

// function spliceByIndex(NumArr, index)
// {
//     NumArr.splice(index, 1);
//     showArray(NumArr, 8);
// }
// spliceByIndex(array(10,100), 5);