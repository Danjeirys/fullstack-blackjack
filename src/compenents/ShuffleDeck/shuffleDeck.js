

export default function shuffleDeck () {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length) 
        let temp = deck[i] // to swap em
        deck[i] = deck[j]
        deck[j] = temp
    }
    console.log (deck)
}