import getValue from '../GetValue/getValue';
import checkAce from '../CheckAce/checkAce';


let dealerSum = 0
let yourSum = 0

let dealerAceCount = 0
let yourAceCount = 0 // keeps track of how many aces you have to add 10 or add 1 to keep you from busting

let hidden
let deck


export default function resetGame () {
    hidden = deck.pop ()
    dealerSum += getValue (hidden)
    dealerAceCount += checkAce (hidden)

    while (dealerSum < 17) {
        let cardImg = document.createElement ('img') // created an <img> tag
        let card = deck.pop () // got card from the deck
        cardImg.src = './cards/' + card + '.png' // set the src for the img tag
        dealerSum += getValue (card) // increments the dealer sum
        dealerAceCount += checkAce (card) // checked how many aces he has using the checkAce function
        document.getElementById ('dealer-cards').append (cardImg) // appended the <img> tag to the dealer-cards
    }
    console.log (dealerSum)

    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement ('img')
        let card = deck.pop () 
        cardImg.src = './cards/' + card + '.png' 
        yourSum += getValue (card) 
        yourAceCount += checkAce (card) 
        document.getElementById('user-cards').append(cardImg) 
    }

    document.getElementById ('dealer-sum').innerText = dealerSum 
    document.getElementById ('user-sum').innerText = yourSum 

    window.location.reload()
} 