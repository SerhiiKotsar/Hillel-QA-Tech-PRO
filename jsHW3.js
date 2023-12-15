/*
Напишіть програму яка буде приймати два значення, перше це одиниця вимірювання (кілометри, години та кілограми), 
друге значення це кількість, а потім переводити ці значення:

    Кілометри в метри
    години в хвилини
    Кілограми в грами

Зробити вивід отриманої інформації у вигляді - 10 км це 10000 м. 1 г це 60хв. 1 кг. це 1000 грм. 

Умови виконання ДЗ

    В задачі не обов'язково використовувати prompt, просто запишіть значення в зміні
    Обов'язково при написані завдання використовуйте switch
    Продумати варіант якщо буде введена якась інша одиниця виміру
    Мудрувати та створювати валідацію не потрібно

*/

//Единицы измерения (unit): kilometrs, hours, kilograms
//count - количество
let unit = 'kilometrs';
let count = 2;

let isOneOfUnit = false;
if (unit === 'kilometrs' || unit === 'hours' || unit === 'kilograms') {
    isOneOfUnit = true;
} else {
    console.log('Выбрано что-то не то');
}

if (isOneOfUnit) {
    switch (unit) {
        case 'kilometrs':
            //1 км - это 1000 метров
            let kilometrsTransform = count * 1000;
            console.log(`${count} км - это ${kilometrsTransform} метров`);
            break;
        case 'hours':
            //1 час - это 60 минут
            let hoursTransform = count * 60;
            console.log(`${count} час - это ${hoursTransform} минут`);
            break;
        case 'kilograms':
            //1 кг - это 1000 гр.
            let kilogramsTransform = count * 1000;
            console.log(`${count} кг - это ${kilogramsTransform} гр`);
            break;
    }
}