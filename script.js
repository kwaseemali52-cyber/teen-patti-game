document.getElementById("game").innerHTML = `
<h1>🃏 Teen Patti</h1>

<p>Welcome to Teen Patti Game</p>

<button onclick="startGame()">Start Game</button>

<div id="result" style="margin-top:20px;font-size:24px;"></div>
`;

function startGame() {

const suits = ["♠","♥","♦","♣"];
const values = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];

let deck = [];

for (let suit of suits) {
  for (let value of values) {
    deck.push(value + suit);
  }
}

deck.sort(() => Math.random() - 0.5);

window.player = deck.slice(0,3);
window.computer = deck.slice(3,6);

document.getElementById("result").innerHTML =
"<h2>Your Cards</h2>" +
window.player.join(" ") +
"<br><br>" +
"<button onclick='showComputer()'>Show Result</button>";
function showComputer() {
  document.getElementById("result").innerHTML +=
    "<br><h2>Computer Cards</h2>" +
    window.computer.join(" ");
}
window.computerCards = computer;

}
