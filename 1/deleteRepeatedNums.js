function deleteOddNumbers(numberArr) {
    let evenArr = [];
    for (let i = 0; i < numberArr.length; i++) {
        if (i % 2 !== 0) {
            evenArr.push(numberArr[i]);
        }
    }
    return evenArr.sort(function(a, b) {return a - b;});
}

let arr = [1, 8, 8, 122, 14, 23, 71, 0, 1];
console.log(deleteOddNumbers(arr));