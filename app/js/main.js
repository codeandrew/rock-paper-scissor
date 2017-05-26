var entry = [
  'rock',
  'paper',
  'scissor'
];
var enemyPick = entry[Math.floor(Math.random() * entry.length)];
var l = function(msg){console.log(msg);};
var choices = document.querySelector('#choices ul');
var i;
var myScore = document.getElementById('myScore');
var eScore = document.getElementById('escore');
var roundResult = [
  'You win this round!',
  'You lose this round!'
];
var scores = [0,0];
var result = document.getElementById('result');
var resultField = document.getElementById('result-field');
var nextRound = document.getElementById('next-round');
var enemyFloor = document.getElementById('enemy-pick');



l('enemy pick: ' + enemyPick);
(function(){
  for(i = 0; i<entry.length; i++){
    choices.innerHTML +=
    '<li><button>'+ entry[i]+ '</button></li>';
  }
  myScore.textContent = 'My Score: ' + scores[0];
  eScore.textContent = 'Opponent Score: ' + scores[1];
}());

var entryChoice = document.querySelectorAll('#choices ul li button');

for(i=0; i < entryChoice.length; i++){
  entryChoice[i].addEventListener('click',function(){
    //l(compete(event));
    result.innerHTML = compete(event);
    throwResult();

    enemyFloor.innerHTML = enemyPick;
    for(i=0;i < entryChoice.length; i++){
      entryChoice[i].disabled = true;
    }// this disables the entry choices to be clicked

    nextRound.innerHTML = '<button> Next Round</button>';
    nextRound.getElementsByTagName('BUTTON')[0]
    .addEventListener('click', function(){
       for(i=0;i < entryChoice.length; i++){
        entryChoice[i].disabled = false;
      }
      enemyPick = entry[Math.floor(Math.random() * entry.length)];
      // to reset the enemy Pick
      enemyFloor.innerHTML = '';
    });
  });
}


function compete(event){
  var pick = event.target.innerHTML;
  //targets the element that was clicked
  if (enemyPick == pick){
    return 'This is a draw';
  }else if(enemyPick == entry[0]){
    return pick == entry[1]? roundResult[0]:roundResult[1];
  }else if(enemyPick == entry[1]){
    return pick == entry[2]? roundResult[0]:roundResult[1];
  }else if (enemyPick == entry[2]){
    return pick == entry[0]? roundResult[0]:roundResult[1];
  }
}

function throwResult(){
  if (result.innerHTML == roundResult[0]) {
    scores[0] += 1;
    myScore.textContent = 'My Score: ' +scores[0];
    result.classList.remove('success','lose');
    result.classList.add('success');
  }else if (result.innerHTML == roundResult[1]) {
    scores[1] += 1;
    eScore.textContent = 'Opponent Score: ' + scores[1];
    result.classList.remove('success','lose');
    result.classList.add('lose');
  }
  if(scores[0] === 3){
    l('Win');
    result.innerHTML = 'You Won!';
    startNewGame();
  } else if (scores[1] === 3){
    l('shit');
    result.innerHTML = 'You Loose!';
    startNewGame();
  }
}

function startNewGame(){
  var newGame = document.getElementById('new-game');
  //nextRound.getElementsByTagName('BUTTON')[0].disa  ble = true;
  nextRound.innerHTML = null ;
  resultField.getElementsByTagName("P")[1].innerHTML= null;
  newGame.innerHTML = '<button>New Game</button>';
  newGame.getElementsByTagName('BUTTON')[0]
  .addEventListener('click', function(){
    l('test');

    scores = [0,0];
    myScore.textContent = 'My Score: ' + scores[0];
    eScore.textContent = 'Opponent Score: ' + scores[1];
    result.innerHTML = '';
    result.classList.remove('success', 'lose');
    nextRound.innerHTML = null;
    for(i=0;i < entryChoice.length; i++){
     entryChoice[i].disabled = false;
   }
    enemyPick = entry[Math.floor(Math.random() * entry.length)];
    newGame.innerHTML = null;
  });
}
/*
function win(){
  alert('win');
  resultField.innerHTML = 'Congratulations You Win!';
}
function lose(){
  alert('lose');
  resultField.innerHTML = 'LOSER!!!';
} */
