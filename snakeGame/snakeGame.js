// Make sure the JS is linked and working

console.log("JavaScript loaded");

// Make a constant to deal with the canvas

const canvas = document.getElementById("gamePanel");
const ctx = canvas.getContext('2d');

// Class to make the body of the snake
class snakeBody{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

// Audio components for the game
const crunch = new Audio("resources/Bite.mp3");
const gameEnd = new Audio("resources/gameOver.wav");
const soundTrack = new Audio("resources/backMusic.mp3");

// For game difficulty
let speed = 5;

// Apple controls
let appleX = 5;
let appleY = 5;

// Variable for game objects such as snake and board grid
let headX = 10;
let headY = 10;
let tailLength = 2;
const snakeParts = [];
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

// For Snake controls
let xVelocity = 0;
let yVelocity = 0;

// Score var to keep a track of the player Score
let score = 0;


// Main controller for the game
function drawGame(){
  updateSnake();
  let result = gameOver();
  if (result) {
    if (document.getElementById("volumeCheck").checked){
      return;
    }else {
      soundTrack.pause();
      gameEnd.play();
      return;
    }
  }

  clearScreen();

  collectApple();

  drawSnake();
  drawApple();

  drawScore();

  if (document.getElementById("volumeCheck").checked){
    soundTrack.pause();
  }else {
    soundTrack.play();
  }

  setTimeout(drawGame, 1000/ speed);
  console.log("Game working");

}

function gameOver() {
  let result = false;

  if (yVelocity === 0 && xVelocity === 0) {
    return result;
  }

  if (headX < 0) {
    result = true;
  }
  else if (headX === tileCount) {
    result = true;
  }
  else if (headY < 0) {
    result = true;
  }
  else if (headY === tileCount) {
    result = true;
  }

  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      result = true;
      break;
    }
  }

  if (result) {
    ctx.fillStyle = "#D83A56";
    ctx.font = "3rem Verdana";
    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    ctx.fillText("Score: " + score, canvas.width / 6.5, canvas.height / 1.6)
  }

  return result;
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score: " + score, canvas.width-50, 10);
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {

  ctx.fillStyle = "blue";
  for (let i = 0; i < snakeParts.length; i++) {
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new snakeBody(headX, headY));
  if (snakeParts.length > tailLength) {
    snakeParts.shift();
  }

  ctx.fillStyle = "green";
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function drawApple() {
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

// Function to update snake position
function updateSnake() {
  headX += xVelocity;
  headY += yVelocity;
  // Increase difficulty with higher score
  if (score > 50) {
    speed = 7;
  }
  if (score > 80) {
    speed = 8;
  }
  if (score > 100) {
    speed = 9;
  }
}

// To eat the apple when collision happens
function collectApple() {
  if(appleX == headX && appleY == headY){
    if(!document.getElementById("volumeCheck").checked){
      crunch.play();
    }
    // Respawn apple at a random place on the board
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score += 10;
  }
}

// Add event listener to the body of the webpage
document.body.addEventListener("keydown", keyDown);

function keyDown(e) {
  // Arrow key up code: 38
  if (e.keyCode == 38){
    // Stop the snake from going exact opposite
    if (yVelocity == 1){
      return;
    }
    yVelocity = -1;
    xVelocity = 0;
  }

  // Arrow key down code: 40
  if (e.keyCode == 40){
    // Stop the snake from going exact opposite
    if (yVelocity == -1){
      return;
    }
    yVelocity = 1;
    xVelocity = 0;
  }

  // Arrow key down code: 37
  if (e.keyCode == 37){
    // Stop the snake from going exact opposite
    if (xVelocity == 1){
      return;
    }
    yVelocity = 0;
    xVelocity = -1;
  }

  // Arrow key down code: 39
  if (e.keyCode == 39){
    // Stop the snake from going exact opposite
    if (xVelocity == -1){
      return;
    }
    yVelocity = 0;
    xVelocity = 1;
  }
}

function startGame(){
  if (document.getElementById("volumeCheck").checked){
    drawGame();
  }else {
    soundTrack.play();
    soundTrack.loop = true;
    drawGame();
  }
}

// To reset the game again
function resetGame() {
  clearScreen();
  drawSnake();
}

// Start with a game that is reset to start point
resetGame();

// Link the functions to the buttons on the webpage
document.getElementById("start").onclick = startGame;
