export function seeingDouble(deck) {
    return deck.map(card => card * 2);
}
  
export function threeOfEachThree(deck) {
    const result = [];
    for(let card of deck)
        if(card === 3)
            result.push(3, 3, 3);
        else
            result.push(card);
    return result; 
}

export function middleTwo(deck) {
    const middleIndex = deck.length / 2;
    return deck.slice(middleIndex - 1, middleIndex + 1);
}
  
export function sandwichTrick(deck) {
    const firstCard = deck.shift();
    const lastCard = deck.pop();
    const middleIndex = deck.length / 2;
    deck.splice(middleIndex, 0, lastCard, firstCard);
    return deck;
}
  
export function twoIsSpecial(deck) {
    return deck.filter(card => card === 2);
}
  
export function perfectlyOrdered(deck) {
    return deck.slice().sort((a, b) => a - b);
}
  
export function reorder(deck) {
    return deck.slice().reverse();
}
  
//1
console.log(seeingDouble([1, 2, 3, 4, 10]));

//2
console.log(threeOfEachThree([1, 3, 9, 3, 7]));

//3
console.log(middleTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//4
console.log(sandwichTrick([1, 2, 3, 5, 6, 10]));

//5
console.log(twoIsSpecial([1, 2, 3, 4, 10, 2]));

//6
console.log(perfectlyOrdered([10, 1, 5, 3, 2, 8, 7]));

//7
console.log(reorder([10, 1, 5, 3, 2]));