//1
function findSquare(num) {
    return num ** 2;
}

console.log('//1')
console.log(findSquare(6));
console.log(findSquare(0));
console.log(findSquare(-12));

//2
console.log('\n//2');

function getRandom(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

console.log(getRandom(3, 5));

//3
console.log('\n//3');

function letterCount(sir, litera) {
    sir = sir.toLowerCase();
    litera = litera.toLowerCase();

    let count = 0;

    for(let i = 0; i < sir.length; i++)
        if(sir[i] === litera)
            count++;

    return count;
}

console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r")); 

//4
console.log('\n//4');

function addNumber(...argumente) {
    return argumente.reduce((sum, num) => sum + num, 0);
}

console.log(addNumber(1, 2, 3)); 
console.log(addNumber(1, 2, 3, 4, 5)); 
console.log(addNumber(10, 20, 30)); 