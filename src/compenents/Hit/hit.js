

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