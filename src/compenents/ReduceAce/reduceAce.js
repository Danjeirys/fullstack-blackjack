

export default function reduceAce (playerSum, playerAceCount) {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10
        playerAceCount -= 0
    }
    return playerSum
}