

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