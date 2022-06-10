/*
 Написать метод/функцию, который/которая на вход принимает массив городов. 
 В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 
 Например, «Москва, Санкт-Петербург, Воронеж.
*/

function arrayToString(citiesArr) {
    let transformedArr = citiesArr.join(', ');
    console.log(transformedArr);
}

const testArr = ['Москва', 'Воронеж', 'Санкт-Петербург'];
arrayToString(testArr);

// 5 минут