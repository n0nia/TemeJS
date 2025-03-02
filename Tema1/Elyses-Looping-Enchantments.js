function cardTypeCheck(cards, cardType) {
    let count = 0;

    cards.forEach(card => {
        if(card === cardType)
            count++;
    });

    return count;
}

function determineOddEvenCards(cards, isEven) {
    let count = 0;

    for(let card of cards) {
        if(isEven && card % 2 === 0) {
            count++;
        }
        else if(!isEven && card % 2 !== 0) {
            count++;
        }
    }

    return count;
}


//1
const cardType = 3;
console.log(cardTypeCheck([1, 2, 3, 4], cardType));

//2
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));