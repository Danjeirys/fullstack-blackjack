

export default function getValue (card) {
    let data = card.split ('-') // by calling split we calling the values ['4', 'C']
    let value = data [0]

    // Checking the value for digits
    if (isNaN(value)) {
        if (value == 'A') {
            return 11
        }
        return 10
    }
    //return w.e value the card is
    return parseInt(value)
}