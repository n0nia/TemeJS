//1
function evenNumbers(n) {
    for(let i = 0; i <= n; i += 2)
        console.log(i);
}
evenNumbers(10);
console.log('');

//2
function sumOfNumbers(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++)
       sum += array[i];
    return sum; 
}

console.log(sumOfNumbers([1, -5, 20, -34, 16, 29, 36, -4]));
console.log(sumOfNumbers([3.45, -2.68, 356, -75.96, 64, 19.28]));

//3
function reverseArray(array) {
    let newArray = array.reverse();
    return newArray;
}

console.log(reverseArray([1, -5, 20, -34, 16, 29, 36, -4]));

//4
function numarVocale(str) {
    let nrVocale = 0;
    const vocale = "aeiouAEIOU";

    for(let char of str) {
        if(vocale.includes(char))
            nrVocale++;
    }

    return nrVocale;
}

console.log(numarVocale("string de test"));