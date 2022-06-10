/*

Написать метод/функцию, который/которая на вход принимает число (int), 
а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 
Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

*/


function declension (someNum) {
    let declinableWord = ' компьютер';
    let lastUnit = someNum % 10;
    let resultString = someNum + declinableWord;
    
    switch (lastUnit) {
        case 0 :
        case 5 :
        case 6 :
        case 7 :
        case 8 :
        case 9 :
            return resultString + 'ов';
        
        case 1 :
            return resultString;
        case 2 : 
        case 3 :
        case 4 : 
            return resultString + 'а';
    }
}

console.log(declension(1));

// 20 минут