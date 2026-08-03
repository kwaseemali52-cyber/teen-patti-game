document.getElementById("game").innerHTML = `
<h1>🃏 Teen Patti</h1>

<p>Welcome to Teen Patti Game</p>

<button onclick="startGame()">Start Game</button>

<div id="result" style="margin-top:20px;font-size:24px;"></div>
`;

function startGame() {
  const cards = ["🂡","🂮","🂱","🃁","🃎","🃑","🂻","🂫","🂽"];
  let player = [];
  for(let i=0;i<3;i++){
    player.push(cards[Math.floor(Math.random()*cards.length)]);
  }

  document.getElementById("result").innerHTML =
  "<h2>Your Cards</h2>" + player.join(" ");
}
