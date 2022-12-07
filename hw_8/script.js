'use strict';
//TODO Завдання 1:

//! 1
// let year = prompt('What year are you born?', 'Year');
// let result = 2022-year;
// alert(`You are ${result} years old!`);

//! 2
//  let gb = prompt('Enter the volume of the flash drive in GB', 'GB');
// let canbewritten = parseInt(gb = gb * 1024/ 820);
// alert(`Number of files= ${canbewritten}`);


//TODO Завдання 2:

//? 1
// let num = +prompt("Enter a number from 0 to 9", "9");
// switch(num){
//     case 0:
//         alert(')');
//     break;

//     case 1:
//         alert('!');
//     break;
//     case 2:
//         alert('@');

//     break;

//     case 3:
//         alert('#');

//     break;

//     case 4:
//         alert('$');

//     break;

//     case 5:
//         alert('%');

//     break;

//     case 6:
//         alert('^');

//     break;

//     case 7:
//         alert('&');

//     break;

//     case 8:
//         alert('*');

//     break;

//     case 9:
//         alert('(');

//     break;
//     default:
//         alert("ERROR, TRY AGAIN!!!!");
// }

//? 2

// let year = +prompt("Enter a year");
// alert(year%4===0 && year % 100 !== 0 ? 'A leap year':"Not a Leap Year" );

//? 3

// let day = +prompt('Enter day');
// let month = +prompt('Enter month');
// let year = +prompt('Enter year');
// let date = new Date(`${year}-${month}-${day}`);
// if (date != NaN)
// {
//     date.setDate(date.getDate()+1);
//     alert(`Next date: ${date.toLocaleDateString()}`);
// }else
// {
//     alert("Invalid date");
// }

//TODO Завдання 3:

//! 1. Підрахуйте суму всіх чисел у заданому користувачем діапазоні

// let x = +prompt('Enter first number');
// let y = +prompt('Enter second number');
// let sum =0;

// for(let i=x; i<= y; i++) {
//     sum+=i;
// }
// alert (sum);

//! 2. Визначте кількість цифр у введеному числі.


// let num = prompt("Enter number");
// function getAmount(n) {
//     let c = 0;
// while(c < n.length) c++;
// return c;
// }
// alert(getAmount(num));

//! 3. Запросіть у користувача 10 чисел і підрахуйте, скільки він ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть статистику на екран. Враховуйте те, що достатньо однієї змінної (не 10) для введення чисел користувачем.
// let positives = negatives = zeros = evens = odds = 0;

// for (let index = 1; index <= 10; index++) {
//     let number = +prompt("Enter number");

//     if (number > 0)
//         positives++;
//     else if (number < 0)
//         negatives++;
//     else
//         zeros++;

//     if (number != 0)
//         if (number % 2 == 0)
//             evens++;
//         else
//             odds++;
// }

// alert(`Додатні: ${positives},  Від'ємні: ${negatives},  Нулі: ${zeros},  Парні: ${evens}, Непарні: ${odds} `);


//! 6. Зацикліть калькулятор. Запросіть у користувача 2 числа і знак, розв’яжіть приклад, виведіть результат і запитайте, чи хоче він розв’язати ще один приклад. І так триватиме доти, доки користувач не відмовиться.



// while (true) {
//     let x = +prompt("Enter first number");
//     let y = +prompt("Enter second number");
//     let choose = prompt("Enter a sign");

//     switch (choose) {
//         case '+':
//             alert(`${x} + ${y} = ${x + y}`);
//             break;
//         case '-':
//             alert(`${x} - ${y} = ${x - y}`);
//             break;
//         case '*':
//             alert(`${x} * ${y} = ${x * y}`);
//             break;
//         case '/':
//             alert(`${x} / ${y} = ${x / y}`);
//             break;
//     }

//     alert("Do you want to continue? y/n")
//         choose = prompt(`Enter your choice`);
//    if (choose == 'n')break;
// }


