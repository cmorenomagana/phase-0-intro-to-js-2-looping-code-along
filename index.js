const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
    let newcards = []
    for (let i = 0; i < cards.length; i++) {
        newcards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    debugger
    }

    return newcards;
}

writeCards(cards)

const Down = 10

function countDown(down) {
    let i = down
    while (i >= 0) {
    console.log(i)
    i--
    }
}

countDown(down)
