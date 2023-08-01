import reduceAce from '../ReduceAce/reduceAce';

let dealerSum = 0
let yourSum = 0
let lifeSpan = 150
let yearsLeft = ''


let dealerAceCount = 0
let yourAceCount = 0 // keeps track of how many aces you have to add 10 or add 1 to keep you from busting

let hidden
let canHit = true

export default function stay () {
    dealerSum = reduceAce (dealerSum, dealerAceCount)
    yourSum = reduceAce(yourSum, yourAceCount)


    canHit = false
    document.getElementById('hide').src = './cards/' + hidden + '.png' // review the hidden card


    // set winning conditions
    let message = ''
    if (yourSum > 21) {
        message = 'YOU LOSE!'
        yearsLeft = lifeSpan -= 10
    } else if (dealerSum > 21) {
        message = 'YOU WIN!'
        yearsLeft = lifeSpan += 10
    } else if (yourSum == dealerSum) {
        message = 'ITS A TIE!'
    } else if (yourSum > dealerSum) {
        message = 'YOU WIN!'
        yearsLeft = lifeSpan += 10
    } else if (yourSum < dealerSum) {
        message = 'YOU LOSE!'
        yearsLeft = lifeSpan -= 10
    }


    document.getElementById ('dealer-sum').innerText = dealerSum // put dealerSum into the ID dealer-sum <h2> tag
    document.getElementById ('user-sum').innerText = yourSum // put yourSum into the ID your-sum <h2> tag
    document.getElementById ('results').innerText = message // puts one of the messages into the ID results <p> tag
    document.getElementById ('years').innerText = yearsLeft // puts the remainder of user lifespan in the ID <h4> tag
    console.log (yearsLeft)
}