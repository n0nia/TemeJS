export function getFirstCard(deck) {
    const [firstCard] = deck;
    return firstCard;
}
  
export function getSecondCard(deck) {
    const [, secondCard] = deck;
    return secondCard;
}

export function swapTopTwoCards(deck) {
    [deck[0], deck[1]] = [deck[1], deck[0]];
    return deck;
}

export function discardTopCard(deck) {
    const [topCard, ...restOfTheDeck] = deck;
    return [topCard, restOfTheDeck];
}

export function insertFaceCards(deck) {
    //const [firstCard, ...restOfTheDeck] = deck;
    const [firstCard, restOfTheDeck] = discardTopCard(deck);
    return [firstCard, 'jack', 'queen', 'king', ...restOfTheDeck];
}

//1
const deck = [5, 9, 7, 1, 8];
console.log(getFirstCard(deck));

//2
const deck2 = [3, 2, 10, 6, 7];
console.log(getSecondCard(deck2));

//3
const deck3 = [10, 7, 3, 8, 5];
console.log(swapTopTwoCards(deck));

//4
const deck4 = [2, 5, 4, 9, 3];
console.log(discardTopCard(deck4));

//5
const deck5 = [5, 4, 7, 10];
console.log(insertFaceCards(deck5));