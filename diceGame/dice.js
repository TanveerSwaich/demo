/*
This is a controller for Dice diceGame
*/

// variables to store results of the role for both players
var p1 = 0;
var p2 = 0;

/*
Function:
  This function generates a random number between the two
  parameters passed to the functions and returns it
Parameters:
  min: The min value that you want from the function
  max: The max value that you want from the function
Return:
  A whole rumber from somewhere in between the parameters
*/
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
Function:
  This is the main function that conrtols the button function
  for button #rollButton in index.html and changes the images and
  result on the webpage accordig to the result of the random.
Parameters:
  None
Return:
  None
*/
function roll(){
  var p1 = randomIntFromInterval(1, 6);
  var p2 = randomIntFromInterval(1, 6);

  changeDice(p1, "dicep1");
  changeDice(p2, "dicep2");

  if (p1 > p2){
    document.getElementById("winner").innerHTML = "Winner is Player 1";
  }else {
    document.getElementById("winner").innerHTML = "Winner is Player 2";
  }
}

/*
Function:
  This function generates a random number between the two
  parameters passed to the functions and returns it
Parameters:
  n: The number that needs to be displayed on the dice
  elementID: The id of the element whose src will be changed
Return:
  None, But changes src for the element passed in parameters
*/
function changeDice(n, elementID){
  if (n === 1){
    document.getElementById(elementID).src="resources/dice1.png";
  }else if (n === 2){
    document.getElementById(elementID).src="resources/dice2.png";
  }else if (n === 3){
    document.getElementById(elementID).src="resources/dice3.png";
  }else if (n === 4){
    document.getElementById(elementID).src="resources/dice4.png";
  }else if (n === 5){
    document.getElementById(elementID).src="resources/dice5.png";
  }else {
    document.getElementById(elementID).src="resources/dice6.png";
  }
}

// Link the function to button click by ID
document.getElementById("rollButton").onclick = roll();
