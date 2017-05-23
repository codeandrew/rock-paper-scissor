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



l('enemy pick: ' + enemyPick);
(function(){
  for(i = 0; i<entry.length; i++){
    choices.innerHTML +=
    '<li><button>'+ entry[i]+ '</button></li>';
  }
  myScore.textContent = 0;
  eScore.textContent = 0;
}());
//var entryChoice = document.getElementById('choices').getElementsByTagName('ul').getElementsByTagName('LI');
var entryChoice = document.querySelectorAll('#choices ul li button');

for(i=0; i < entryChoice.length; i++){
  entryChoice[i].addEventListener('click',function(){
    l(compete(event));
  });
}


function compete(event){
  var pick = event.target.innerHTML;


  if (enemyPick == pick){
    return 'This is a draw';
  }else if(enemyPick == entry[0]){
    return pick == entry[1]? 'You Won!':'You lose!';
  }else if(enemyPick == entry[1]){
    return pick == entry[2]? 'You Won!!':'You Lose!!'
  }else if (enemyPick == entry[2]){
    return pick == entry[0]? 'You Won!!!':'You Lose!!!'
  }

}
