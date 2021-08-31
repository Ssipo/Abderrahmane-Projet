let player = {
    name: "Sipo",
    chips: 200
}

let cards = []
var deck = ["fullDeck/ace.png", "fullDeck/card2.png'", "fullDeck/card3.png","fullDeck/card4.png","fullDeck/card5.png",
"fullDeck/card6.png","fullDeck/card7.png","fullDeck/card8.png","fullDeck/card9.png","fullDeck/card10.png","fullDeck/cardj.jpg",
"fullDeck/cardq.jpg","fullDeck/cardk.jpg"]

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let deckEl = document.getElementById("deck-el")

playerEl.textContent = player.name + ": $" + player.chips

for (var i = 0; i < deck.length; i++) {
    document.getElementById("deck-el").src = deck.src;
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if(randomNumber === 1 ){
        deckEl.textContent += " " + deck[0]
    }
    else if(randomNumber === 2 ){
        deckEl.textContent += " " + deck[1]
    }
    else if(randomNumber === 3 ){
        deckEl.textContent += " " + deck[2]
    }
    else if(randomNumber === 4){
        deckEl.textContent += " " + deck[3]
    }
    else if(randomNumber === 5){
        deckEl.textContent += " " + deck[4]
    }
    else if(randomNumber === 6){
        deckEl.textContent += " " + deck[5]
    }
    else if(randomNumber === 7){
        deckEl.textContent += " " + deck[6]
    }
    else if(randomNumber === 8){
        deckEl.textContent += " " + deck[7]
    }
    else if(randomNumber === 9){
        deckEl.textContent += " " + deck[8]
    }
    else if(randomNumber === 10){
        deckEl.textContent += " " + deck[9]
    }
    else if(randomNumber === 11){
        deckEl.textContent += " " + deck[10]
    }
    else if(randomNumber === 12){
        deckEl.textContent += " " + deck[11]
    }
    else if(randomNumber === 13){
        deckEl.textContent += " " + deck[12]
    }

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    deckEl.textContent = ""
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
