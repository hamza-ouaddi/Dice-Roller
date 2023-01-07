//Red Dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomRedDices = "red-dice-" + randomNumber1 + ".png";

var randomRedDicesSource = "/Dice-Roller/images/" + randomRedDices;

var redImage = document.querySelectorAll("img")[0];
redImage.setAttribute("src", randomRedDicesSource);

//Blue Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomBlueDice = "blue-dice-" + randomNumber2 + ".png";

var randomBlueDiceSource = "/Dice-Roller/images/" + randomBlueDice;

var blueImage = document.querySelectorAll("img")[1];
blueImage.setAttribute("src", randomBlueDiceSource);

//title

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  document.querySelector("h1").style.color = "#cc4e4e";
  document.querySelector("h1").style.textShadow = "4px 0 #2b3467";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  document.querySelector("h1").style.color = "#4482c3";
  document.querySelector("h1").style.textShadow = "4px 0 #2b3467";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
