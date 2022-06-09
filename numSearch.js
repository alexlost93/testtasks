function oddTimesNumberSearch (arr) {
    let entryCount = 1;
    let counter = 0;
    let item;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) { // for each arr[i] we check if arr[j] is equal and adding counter
            if (arr[i] == arr[j]){
                counter++;
            } 

            if (entryCount < counter)
            {
                entryCount = counter;
                item = arr[i];
            }
        }
        counter = 0;
    }
    return item;
}

const testArr = [1, 1, 1, 2, 2, 3, 3];
console.log(oddTimesNumberSearch(testArr));