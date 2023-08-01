import buildDeck from '../BuildDeck/buildDeck';
import shuffleDeck from '../ShuffleDeck/shuffleDeck';
import getValue from '../GetValue/getValue';
import checkAce from '../CheckAce/checkAce';
import hit from '../Hit/hit';
import stay from '../Stay/stay';
import resetGame from '../ResetGame/resetGame'
// import '../styles.js'


let dealerSum = 0
let yourSum = 0
let lifeSpan = 150
let yearsLeft = ''


let dealerAceCount = 0
let yourAceCount = 0 // keeps track of how many aces you have to add 10 or add 1 to keep you from busting

let hidden
let deck

// let canHit = true // allows the the user to draw/hit while the user total sum is <= 21



export default function startGame () {
    hidden = deck.pop () // takes out a card from the end of the array
    dealerSum += getValue (hidden) //gets the value of the card
    dealerAceCount += checkAce (hidden) // checks if its an ace
    // console.log (hidden)
    // console.log (dealerSum)


    // dealing to the dealer as long as his total sum is greater than 17
    while (dealerSum < 17) {
        let cardImg = document.createElement ('img') // created an <img> tag
        let card = deck.pop () // got card from the deck
        cardImg.src = './cards/' + card + '.png' // set the src for the img tag
        dealerSum += getValue (card) // increments the dealer sum
        dealerAceCount += checkAce (card) // checked how many aces he has using the checkAce function
        document.getElementById ('dealer-cards').append (cardImg) // appended the <img> tag to the dealer-cards
    }
    console.log (dealerSum)

    // cards for the player and creates 2 cards images
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement ('img')
        let card = deck.pop () 
        cardImg.src = './cards/' + card + '.png' 
        yourSum += getValue (card) 
        yourAceCount += checkAce (card) 
        document.getElementById('user-cards').append(cardImg) 
    }
    //print our user sum
    console.log (yourSum)
    document.getElementById ('hit').addEventListener ('click', hit) // calls on the 'hit' function giving the user a new card
    document.getElementById ('stay').addEventListener ('click', stay) // calls on the stay function letting the user end their turn with current total sum
    document.getElementById ('restart').addEventListener ('click', resetGame)
    // document.getElementById ('life').addEventListener ('click', betLife)

    buildDeck()
    shuffleDeck()
}