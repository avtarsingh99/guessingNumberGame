const C = console;
const D = document;


let lucky = Math.floor(Math.random() * 20);
let score = 10;
C.log("lucky no. is " + lucky);

const userInputField = D.getElementById("guessing");
const checkBtn = D.getElementById("check");
const messageBox = D.getElementById("message");
const main = D.getElementById("main");
let scoreSection = D.getElementById("score");
let reset = D.getElementById("again");

// Messages
const winMsg = 'Wow ! You have guessed right, You are a lucky person !';
const lowMsg = 'You guessed a lower number :(';
const highMsg = 'You guessed a higher number :(';
const outOfGuessMsg = 'You ran out of guesses ! ';
const outOfRange = 'Please enter a number between 1 to 20 ';
const youLose = 'You have ran out of attempts  !!! ';


const checkFunction = () => {
  const userGuess = Number(userInputField.value) ;
 if(userGuess > 20 || userGuess < 0){
    messageBox.textContent = outOfRange;
    main.style.backgroundColor = '#333'
 }
 else if(score == 0){
    messageBox.textContent = youLose;
    alert("You want to try again ?");
    resetFunction();
 }
 else{    
  if(userGuess == lucky){
    messageBox.textContent = winMsg;
    main.style.backgroundColor = 'Green'
  }
  else if (userGuess > lucky){
    messageBox.textContent = highMsg;
    main.style.backgroundColor = 'Red'
    score = score - 1;
    C.log("score is " + score);
  }
  else{
    messageBox.textContent = lowMsg;
    main.style.backgroundColor = 'Red'
    score = score - 1;
    C.log("score is " + score);
  }
 }
 scoreSection.innerText = score;
}

checkBtn.addEventListener('click',checkFunction);

const resetFunction = () => {
    lucky =  Math.floor(Math.random() * 20);
    score = 10;
    C.log("lucky no. is " + lucky);
}

reset.addEventListener('click', resetFunction);



 