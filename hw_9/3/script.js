'use strict';
let textJust = 'lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ab,';

//* 1. Функція приймає рядок та рахує кількість пробілів в ньому.

// function searchSpace(text){
//     let result = 0, index = 0;
//     while ((index = text.indexOf(' ', index + 1)) > 0) { 
//         result++; 
//     }
//     alert(`The string contains ${result} spaces`);
//  }
// searchSpace(textJust);


//* 2. Функція переводить перший сиивол рядка у верхній регістр.

// function upFirstSymbol(text){
//     if (!text){ alert(text);}

//     alert(text[0].toUpperCase() + text.slice(1));
// }
// upFirstSymbol(textJust);

//* 3. Функція рахує кількість слів в рядку

// function wordCountStr(text){
//     alert( text.split(" ").length);
// }
// wordCountStr(textJust);


//* 4. Функція перевіряє чи переданий рядок являється паліндромом

function palindromeCheck(text)
{
    let str = text.split("").reverse().join("");
    if (text == str)
    {
        alert(true);
    }else
    {
        alert(false);
    }
}

palindromeCheck(textJust);