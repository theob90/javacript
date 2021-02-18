'use strict';


//selecting  Elements
//# giati exw ID
const score0El = document.querySelector('#score--0');
// const score = getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore;
let player;
let playing;
let scores; 

const init = function(){
    scores = [0,0];
    currentScore = 0;
    player = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    //vazw kai hidden sto css
    diceEl.classList.add('hidden');
    player0El.classList.remove('remove--winner');
    player1El.classList.remove('remove--winner');
    player0El.classList.add('remove--active');
    player1El.classList.remove('remove--active');



};

init();

const switchPlayer = function(){
    document.getElementById(`current--${player}`).textContent = 0;
    currentScore = 0;
    player = player === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};





//roll dice
btnRoll.addEventListener('click', function(){
    if (playing){
        
    
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice !== 1){
        currentScore = currentScore + dice;
        document.getElementById(`score--${player}`).textContent = currentScore;
        // current0El.textContent = currentScore;
    }else{
        switchPlayer();
    }
}
});

btnHold.addEventListener('click', function(){
    if(playing){    
        scores[player] += currentScore;
        document.getElementById(`score--${player}`).textContent = scores[player];
        if(scores[player]>=10){
            playing = false;
            document.querySelector(`.player--${player}`).classList.add('player--winner');
            document.querySelector(`.player--${player}`).classList.remove('player--active');
        }else{
            switchPlayer();

        }
        
}
});

btnNew.addEventListener('click',  init);