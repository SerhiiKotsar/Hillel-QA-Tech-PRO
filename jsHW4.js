/*
ДЗ 1

Вам необхідно намалювати в консолі прямокутний трикутник із зірочок (або плюсиків, або якогось іншого символу): 
на першому рядку - одна зірочка, на другій дві, і так далі. 
Рішення оформіть у вигляді функції, куди передаються два параметри: 
висота трикутника та символ, яким його потрібно "малювати".

Якось так:
drawTriangle(5, *);

*
**
***
****
*****

*/

//1. Способ с for
function drawTriangleFirst(number, symbol) {
    for (let i = 1; i <= number; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str = str + symbol;
        }
        console.log(str);
    }
}

drawTriangleFirst(5, '*');

//2. Способ с while
function drawTriangleSecond(secondNumber, secondSymbol) {
    let i = 1;
    while (i <= secondNumber) {
        let str = '';
        let j = 0;
        while (j < i) {
            str = str + secondSymbol;
            j++;
        }
        console.log(str);
        i++;
    }
}

drawTriangleSecond(5, '$');

/*

ДЗ 2

Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

*/

for (let el = 0; el <= 100; el++) {
    if (el % 3 !== 0) {
        console.log(el);
    }
}

/*

ДЗ 3:

Написати функцію pow(x,y) яка буде приймати 2 числа, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.
Наприклад pow(2,3) функція поверне значення 8. 

*/

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = result * x;
    }
        return result;
}

console.log(pow(2, 3));