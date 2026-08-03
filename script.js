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

function startGame(){

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
