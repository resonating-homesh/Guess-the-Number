'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// document.querySelector('.guess').value = 45;
// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;
let score = Number (document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  // console.log(typeof guess);

  if (!guess) //no input
  {
    document.querySelector('.message').textContent = 'No Number!!!';
  } 
  //when player wins
  else if (guess === number) 
  {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = number;

    //to increase width of the number
    document.querySelector('.number').style.width = '30 rem';
  } 
  else if (guess !== number)
  {
    if (score > 1)
    {
      document.querySelector('.message').textContent = 
      guess > number ? 'Too High!!!' : 'Too Low!!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else
    {
      document.querySelector('.message').textContent = 'You lost the Game!!!';
      document.querySelector('.score').textContent = 0;
    }

  }
  // else if (guess > number)
  // {
  //   if (score > 1)
  //   {
  //     document.querySelector('.message').textContent = 'Too high!!!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   }
  //   else 
  //   {
  //     document.querySelector('.message').textContent = 'You lost the game :") ';
  //     document.querySelector('.score').textContent = 0;
  //   }
    
  // } 
  // else if (guess < number)
  // {
  //   if (score > 1)
  //   {
  //     document.querySelector('.message').textContent = 'Too low!!!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   }
  //   else 
  //   {
  //     document.querySelector('.message').textContent = 'You lost the game :") ';
  //     document.querySelector('.score').textContent = 0;
  //   }
    
  // }
});

//again button case
document.querySelector('.again').addEventListener('click', function ()
{
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  
  if (score > document.querySelector('.highscore').textContent)
  {
    document.querySelector('.highscore').textContent = score;
  }

  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
