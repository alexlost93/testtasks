/*
Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок. 
Пример: 
27 => 25, 27.8 => 30, 41.7 => 40.
*/

function roundToFive(tst) {
    let remainder = tst % 5;
    let compareValue = 5 / 2;

    if (remainder < compareValue) {
        return tst - (tst % 5);
    } else {
        return tst - (tst % 5) + 5;
    }
    
}

console.log(roundToFive(0.9));
console.log(roundToFive(12.4));
console.log(roundToFive(18.5));
console.log(roundToFive(100.0001));
console.log(roundToFive(62.76435));

//25 минут