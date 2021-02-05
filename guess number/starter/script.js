'use strict';



//  console.log(document.querySelector('.message').textContent);

//  document.querySelector('.message'). textContent = 'Correct number';

//  document.querySelector('.number').textContent =13;
//  document.querySelector('.score').textContent = 10;

 
//  document.querySelector('.guess').value = 23;
//  console.log(document.querySelector('.guess').value);


//clickhandler

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0 ;

document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);   
   
   if(!guess){
       document.querySelector('.message').textContent = 'No number';

   }else if (guess === secretNumber){
       document.querySelector('.message'). textContent = 'Correct number';
       document.querySelector('body').style.backgroundColor= '#60b347';
       if(score> highScore){
           highScore=score;
           document.querySelector('.highscore').textContent = highScore;

       }

   }else if(guess>secretNumber){
       if (score>0){
        document.querySelector('.message').textContent = 'too high';
        score --;
        document.querySelector('.score').textContent = score;
       }else{
           document.querySelector('.message').textContent = 'Game over'
           document.querySelector('.score').textContent = 0;

        }
       
   }else {
        if(score>0){
            document.querySelector('.message').textContent = 'too low'
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'Game over'
        }

    }



});

document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor= '#222';

});