let chips = 1000;
let currentBet = 50;
let chips = 1000;
let currentBet = 100;
const suits = ["♠","♥","♦","♣"];
const values = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];

function createDeck(){
    let deck = [];

    for(let suit of suits){
        for(let value of values){
            deck.push({
                value:value,
                suit:suit
            });
        }
    }

    return deck.sort(() => Math.random() - 0.5);
}

function cardHTML(card){

    let color =
    (card.suit=="♥" || card.suit=="♦")
    ? "red"
    : "black";

    return `
    <div class="card ${color}">
        ${card.value}${card.suit}
    </div>`;
}

function startGame(document.getElementById("controls").style.display = "block";){document.getElementById("chips").innerHTML =
"💰 Chips: " + chips;

    let deck = createDeck();

    let player = deck.slice(0,3);
    let computer = deck.slice(3,6);

    let html = `
        <h2>Your Cards</h2>

        <div class="cards">
            ${player.map(cardHTML).join("")}
        </div>

        <button onclick="showWinner()">Show Winner</button>
    `;

    document.getElementById("result").innerHTML = html;

    window.playerCards = player;
    window.computerCards = computer;
}
function cardScore(card){

    const score = {
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "10":10,
        "J":11,
        "Q":12,
        "K":13,
        "A":14
    };

    return score[card.value];
}

function totalScore(cards){
    return cards.reduce((sum, card) => sum + cardScore(card), 0);
}

function showWinner(){

    let playerScore = totalScore(window.playerCards);
    let computerScore = totalScore(window.computerCards);

    let winner = "";

    if(playerScore > computerScore){
        winner = "🎉 You Win!";
        chips += currentBet;
    }
    else if(playerScore < computerScore){
        winner = "🤖 Computer Wins!";
        chips -= currentBet;
    }
    else{
        winner = "🤝 Draw!";
    }

    document.getElementById("chips").innerHTML =
        "💰 Chips: " + chips;

    document.getElementById("result").innerHTML += `
        <h2>Computer Cards</h2>

        <div class="cards">
            ${window.computerCards.map(cardHTML).join("")}
        </div>

        <h2>${winner}</h2>

        <p>Your Score: ${playerScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;
}

    let playerScore = totalScore(window.playerCards);
    let computerScore = totalScore(window.computerCards);

    let winner = "";

    if(playerScore > computerScore){
        winner = "🎉 You Win!";
    }else if(playerScore < computerScore){
        winner = "🤖 Computer Wins!";
    }else{
        winner = "🤝 Draw!";
    }

    document.getElementById("result").innerHTML += `

        <h2>Computer Cards</h2>

        <div class="cards">
            ${window.computerCards.map(cardHTML).join("")}
        </div>

        <h2>${winner}</h2>

        <p>Your Score: ${playerScore}</p>
        <p>Computer Score: ${computerScore}</p>

    `;
}
function blind(){
    alert("🙈 Blind Chaal Played");
}

function seen(){
    alert("👁 Cards Seen");
}

function chaal(){
    currentBet += 100;
    alert("💰 Bet is now " + currentBet);
}

function pack(){
    alert("❌ You Packed!");
    location.reload();
}
function blind() {
    alert("🙈 Blind Chaal Played!");
}

function seen() {
    alert("👁 Cards Seen!");
}

function chaal() {
    currentBet += 50;
    alert("💰 Chaal: " + currentBet);
}

function pack() {
    alert("❌ You Packed!");
    startGame();
}
