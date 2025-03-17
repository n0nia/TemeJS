export function getItem(cards, position) {
    return cards[position];
}

export function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
}

export function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
}
  
export function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}
  
export function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}

export function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}
  
export function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}

export function checkSizeOfStack(cards, stackSize) {
    return cards.length === stackSize;
}
  
//1
const position = 2;
console.log(getItem([1, 2, 4, 1], position));

//2
const replacementCard = 6;
console.log(setItem([1, 2, 4, 1], position, replacementCard));

//3
const newCard = 8;
console.log(insertItemAtTop([5, 9, 7, 1], newCard));

//4
console.log(removeItem([3, 2, 6, 4, 8], position));

//5
console.log(removeItemFromTop([3, 2, 6, 4, 8]));

//6
console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

//7
console.log(removeItemAtBottom([8, 5, 9, 7, 1]));

//8
const stackSize = 4;
console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));
