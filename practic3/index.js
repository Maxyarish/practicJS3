// Напишіть функцію, яка приймає число - рік і повертає true, якщо рік є столітнім (кратний 100), і false в іншому випадку. Параметр за замовченням = 2024.

// Напишіть функцію, яка приймає число - температуру в градусах Цельсія і повертає температуру в градусах Фаренгейт. 1 градус Цельсия = 33.8 градуса Фаренгейта

//Напишіть функцію, яка приймає два числа і повертає true, якщо перше число кратне другому, і false в іншому випадку.

//Напишіть функцію, яка приймає основу і висоту трикутника і повертає його площу. Формула: (основа*висоту)/2

//Напишіть функцію, яка приймає вартість товару та податкову ставку (у відсотках) і повертає кінцеву вартість товару з податком. Значення ставки за замовчуванням = 20.
/*
console.log('task 1');
function isCentenaryears(year1=2024) {
return (year1 % 100 ===0)?true:false;
    }
console.log(isCentenaryears(100));


console.log('task 2');
const CELSIE_FARENHEIT=32;
const Koef_CE_sius_farengait=9/5;
function convert(celsies) {
return celsies*Koef_CE_sius_farengait+CELSIE_FARENHEIT
}
console.log(convert(50));


console.log('task 3')
function isNumbersMultiple(number1,number2) {
    return (number1%number2===0);
}
console.log(isNumbersMultiple(5,5));


console.log('task 4')
function getAreaTriangle(basis,height) {
    return basis*height/2;
}
console.log(getAreaTriangle(50,15));


console.log('task 5');
function summaGoods(summa,procents=20) {
    const pdv=summa*procents/100
    return summa+pdv;
}
console.log(summaGoods(40,10));


console.log('task 6')
function isEvenDiferenceBetweenNumbers(number1,number2) {
    return (number1-number2%2===0)?true:false;
}
console.log(isEvenDiferenceBetweenNumbers(5,4))
*/

console.log('task7');
const Inch_cm=2.54
function convertINCH_CANTIMETR(Inch) {
    return Inch*Inch_cm;
}
console.log(convertINCH_CANTIMETR(3,5))