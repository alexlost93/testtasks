/*
Написать метод, который определяет, 
какие элементы присутствуют в двух экземплярах в каждом из массивов 
(= в двух и более, причем в каждом).

На вход подаются два массива.
На выходе массив с необходимыми совпадениями.

Пример:
[7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
На выходе [1, 17]
*/

function compareTwoArrs(arr1, arr2) {
    const resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !(resultArr.includes(arr1[i]))) {
            resultArr.push(arr1[i]);
        }
    }
    return resultArr;
}

let arr1test = [1, 'вася', 'вася', {}, 252.5, NaN];
let arr2test = ['вася', 'вася', 'вася', 2, null];
console.log(compareTwoArrs(arr1test, arr2test));

//20 минут