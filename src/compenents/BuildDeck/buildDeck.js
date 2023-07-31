

export default function buildDeck () {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
    let types = ['C', 'D', 'H', 'S']
    let deck 
    deck = []
//loop through all the types first then values for each type
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push (values[j] + '-' + types[i])
        }
    }
    // console.log (deck)
}
