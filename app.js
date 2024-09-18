let playBtn = document.getElementById("play");
let user_1 = document.getElementById("user-1");
let user_2 = document.getElementById("user-2");
let player1_Img = document.getElementById("player-1");
let player2_Img = document.getElementById("player-2");
let showResult = document.getElementById("result");
let firstRandomNum, secondRandomNum;

function showImg_6ForBothPlayer() {
  let player1_Img = document.getElementById("player-1");
  let player2_Img = document.getElementById("player-2");
  let showDice6_Img = "images/dice6.png";
  player1_Img.setAttribute("src", showDice6_Img);
  player2_Img.setAttribute("src", showDice6_Img);
}
showImg_6ForBothPlayer();

function diceRollPlayer_1() {
  firstRandomNum = Math.floor(Math.random() * 6) + 1;
  let diceRoll_1 = "images/dice" + firstRandomNum + ".png";
  player1_Img.setAttribute("src", diceRoll_1);
}

function diceRollPlayer_2() {
  secondRandomNum = Math.floor(Math.random() * 6) + 1;
  let diceRoll_2 = "images/dice" + secondRandomNum + ".png";
  player2_Img.setAttribute("src", diceRoll_2);
}

playBtn.addEventListener("click", () => {
  diceRollPlayer_1();
  diceRollPlayer_2();

  if (firstRandomNum > secondRandomNum) {
    showResult.innerHTML = "Player-1 Win";
  } else if (firstRandomNum < secondRandomNum) {
    showResult.innerHTML = "Player-2 Win";
  } else {
    showResult.innerHTML = "Game is Tie";
  }
});
