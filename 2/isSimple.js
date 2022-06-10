/*
Написать метод/функцию, который/которая на вход принимает целое число, 
а на выходе возвращает то, является ли число простым 
(не имеет делителей кроме 1 и самого себя).
*/

function isNumSimple (someNum) {
    for (let i = 2; i < someNum; i++) {
        console.log(i);
        if ((someNum % i) === 0) {
            return false;
        }
    }
    return true;
}

console.log(isNumSimple(77));

//10 минут