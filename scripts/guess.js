// selecting DOM elements
const display = document.querySelector('#display');
const check = document.querySelector('.check');
const reset = document.querySelector('.again');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let trials = document.querySelector('.trials');
const warning = document.querySelector('.warning');
const msg = document.querySelector('.message');
const body = document.querySelector('body');
const congrats = document.querySelector('.congrats');



// Get the element by its ID
const myElement = document.getElementById('myElement');

// Add the CSS class with the animation to the element
number.classList.add('number');




const playGame = function(){
    let randomNum = Math.ceil(Math.random() * 5);


    const correctSound = new Audio('../assets/mixkit-cartoon-positive-sound-2255.wav')
    const wrongSound = new Audio('../assets/mixkit-game-show-wrong-answer-buzz-950.wav')
    const gameOverr = new Audio('../assets/mixkit-funny-fail-low-tone-2876.wav')

    // for the function
    const playRightSound = function() {
        correctSound.play();
      };
    const playWrongSound = function() {
        wrongSound.play();
      };
    const gameOver = function() {
        gameOverr.play();
      };
      

// console.log(randomNum);

// For trials
    trials.innerHTML--;
    (trials.innerHTML < 0) ? trials.innerHTML = 0 : trials.innerHTML

if (guess.value == null || guess.value < 1 || guess.value > 5 || guess.value == ""){
    playWrongSound()
    warning.style.display = "block";
    warning.innerHTML = "please enter a number between 1-5";
    setTimeout(()=> warning.style.display = "none", 3000);
    guess.value = "";
}else if(guess.value == randomNum){
    playRightSound()
    display.innerHTML = "Correct!!!";
    congrats.style.display = "block";
    number.innerHTML = randomNum;
    body.classList.remove("fail")
    body.classList.remove("body")
    body.classList.add("correct")
    
    // guess.innerHTML = "
    // number.innerHTML = "?"
    

}else if(trials.innerHTML == 0){
    gameOver()
    display.innerHTML = "Game Over!!!";
    body.classList.remove("fail")
    body.classList.remove("correct")
    body.classList.add("body")
    guess.value = ""
    number.innerHTML = "?"
    check.setAttribute("disabled", "true")
    msg.innerHTML = "Play again!!"
}else{
    playWrongSound()
    body.classList.remove("body")
    body.classList.remove("correct")
    body.classList.add("fail")
    display.innerHTML = "Opps you're wrong!"
    msg.innerHTML = "Continue playing"
}
}

// playGames()
check.addEventListener('click', playGame);
reset.addEventListener('click', handleReset);
console.log(window);

// Reset function
function handleReset(){
    window.location.reload()
}