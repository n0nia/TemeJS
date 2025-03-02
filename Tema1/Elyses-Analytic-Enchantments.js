export function getCardPosition(cards, card) {
    return cards.indexOf(card);
}

export function doesStackIncludeCard(cards, card) {
    return cards.includes(card);
}

export function isEachCardEven(cards) {
    return cards.every(card => card % 2 === 0);
}

export function doesStackIncludeOddCard(cards) {
    //return cards.some(card => card % 2);\
    return cards.some(card => card % 2 === 1);
}

export function getFirstOddCard(cards) {
    return cards.find(card => card % 2 === 1);
}

export function getFirstEvenCardPosition(cards) {
    return cards.findIndex(card => card % 2 === 0);
}

//1
const card = 2;
console.log(getCardPosition([9, 7, 3, 2], card));

//2
console.log(doesStackIncludeCard([2, 3, 4, 5], card));

//3
console.log(isEachCardEven([2, 4, 6, 7]));

//4
console.log(doesStackIncludeOddCard([3, 2, 6, 4, 8]));

//5
console.log(getFirstOddCard([4, 2, 8, 7, 9]));

//6
console.log(getFirstEvenCardPosition([5, 2, 3, 1]));