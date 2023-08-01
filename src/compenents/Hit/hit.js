import getValue from '../GetValue/getValue';
import checkAce from '../CheckAce/checkAce';
import reduceAce from '../ReduceAce/reduceAce';

let yourSum = 0
let yourAceCount = 0
let deck
let canHit = true // allows the the user to draw/hit while the user total sum is <= 21

export default function hit () {
    if (!canHit) {
        return
    }


    let cardImg = document.createElement ('img')
    let card = deck.pop () 
    cardImg.src = './cards/' + card + '.png' 
    yourSum += getValue (card) 
    yourAceCount += checkAce (card) 
    document.getElementById ('user-cards').append (cardImg) 

    // check user sum and user ace count
    if (reduceAce(yourSum, yourAceCount) > 21) {
        canHit = false
    }
}