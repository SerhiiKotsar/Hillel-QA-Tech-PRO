/*

ДЗ 1

Написати свою реалізацію функції isNaN. 

Умови виконання ДЗ

    Не використовувати функції або інші матеріали які ми не вивчали
    Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки
    Не використовувати isNaN/ Number.isNaN

    Пример с лекции:
    let a = 'qwerty' / 10;
    console.log(a); // NaN
    console.log(isNaN(a)); // true
    console.log(isNaN(undefined)); // true
    console.log(isNaN(NaN)); // true
    console.log(isNaN("qwerty")); // true

    Функция isNaN() определяет является ли литерал или переменная нечисловым значением (NaN) или нет.

*/

function myIsNaN(value) {
    //value !== value - проверяем является ли value NaN, т.к. NaN !== NaN.
    return Number(value) !== Number(value);
}

console.log(myIsNaN('qwerty')); //ожидаю true
console.log(myIsNaN(undefined)); //ожидаю true
console.log(myIsNaN(11)); //ожидаю false
console.log(myIsNaN(NaN)); //ожидаю true
console.log(myIsNaN(true)); //ожидаю false


/*

ДЗ 2

Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, 8, true), 
яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте значення 6, то додаєте тільки один символ

О методах:

padStart(targetLength [, padString]): Этот метод добавляет символы (по умолчанию пробелы) в начало строки до тех пор, 
пока ее длина не достигнет или превысит указанную targetLength. Если строка уже достаточно длинная, она остается неизменной

padEnd(targetLength [, padString]): Этот метод добавляет символы (по умолчанию пробелы) в конец строки до тех пор, 
пока ее длина не достигнет или превысит указанную targetLength. Если строка уже достаточно длинная, она остается неизменной

*/


function pad(str, char, count, addTo) {

    //Проверяем параметры на типы данных (символ ещё и на длину)
    if (typeof str !== 'string' || (char !== 'string' && char.length !== 1) || typeof count !== 'number' || typeof addTo !== 'boolean') {
        console.log('Некорректные аргументы. Пожалуйста, передайте в следующем порядке: строку, 1 символ, количество и булевое значение.');
        return console.log(`Полученные аргументы: ${str}, ${char}, ${count}, ${addTo}`);
    }
    //Проверяем введённое пользователем количество символов для добавления
    if (count <= 0) {
        console.log('Количество символов для добавления должно быть больше 0');
        return console.log(`Полученные аргументы: ${str}, ${char}, ${count}, ${addTo}`);
    }

    //Определяем логику вставки символов (в начало или конец строки)
    if (addTo) {
        //Добавить к началу. Используем метод repeat для создания строки, которая содержит в себе 'count - str.length' количества символов char. Эта строка добавляется к str после конкатенацией
        return char.repeat(Math.max(0, count - str.length)) + str;
    } else {
        //Добавить к концу. Используем строку str, а потом присоединяем строку созданную методом repeat, который содержит в себе 'count - str.length' количества символов char
        return str + char.repeat(Math.max(0, count - str.length));
    }

}

console.log(pad('Qwerty', '*', 10, true));

/*
ДЗ 3

Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). Параметр count буде вказувати скільки разів буде генеруватися випадкове число.

Умови виконання ДЗ

Функція виводить інформацію:
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних: 
    
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будь-які підказки

*/

function getRandomBeetwen(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkProbabilityTheory(count) {

    let countPaire = 0;
    let countUnPaire = 0;

    for (let i = 0; i < count; i++) {

        let randomNumber = getRandomBeetwen(100, 1001);

        if (randomNumber % 2 === 0) {
            countPaire++;
        } else {
            countUnPaire++;
        }
    }

    const countTotal = countPaire + countUnPaire;
    const parniPercent = (countPaire / countTotal) * 100;
    const neParniPercent = (countUnPaire / countTotal) * 100;

    const resultString = `
    Кількість згенерованих чисел всього: ${countTotal}
    Парних чисел всього: ${countPaire}
    Не парних чисел всього: ${countUnPaire}
    Відсоток парних до не парних: ${parniPercent}
    Відсоток не парних до парних: ${neParniPercent}
    `;

    return resultString;

}

console.log(checkProbabilityTheory(1000));
