// var readlineSync = require('readline-sync');
// var score = 0;
// var questionOne = readlineSync.question('Am I older than 30? ');
// var answerOne = 'yes'

// if (questionOne==answerOne) {
//   score = score + 1;
//   console.log('You are right. You Scored ' + score);
// } else {
//   score = score - 1;
//   console.log('You are wrong, You scored '+ score);
// }

// var questionTwo = readlineSync.question('Where Do I live? ');
// var answerTwo = 'Lucknow'

// if (questionTwo.toUpperCase()==answerTwo.toUpperCase()) {
//   score = score + 1;
//   console.log('You are again right, You scored ' + score)
// } else {
//   score = score- 1;
//   console.log ('You are wrongm You scored' + score)
// }
/***********************/ Function method___

// var readlineSync = require('readline-sync');
// var score = 0;

// function play(question, answer) {
//   var userAnswer = readlineSync.question(question) 
//     if (userAnswer.toUpperCase() == answer.toUpperCase()) {
//       score = score + 1;
//       console.log('You are right. You scored '+score)
//     } else {
//       score = score - 1;
//       console.log('You are wrong! You scored '+ score)
//     }
//   }


// play('Am I older than 30? ', 'yes')
// play('Where Do I live? ', 'Lucknow')
// play('HI? ', 'hi')

// Using array method- and function---

var readlineSync = require('readline-sync');
var score = 0;

var questions = [{
  question: 'Am I older than 30? ',
  answer: 'yes'
}, {
  question: 'Where do I live? ',
  answer: 'lucknow'
}, {
  question: 'Where do I work? ',
  answer: 'ibm'
}, {
  question: 'How do I look? ',
  answer: 'good'
}, {
  question: 'What I like? ',
  answer: 'coding'
}]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log('You are right, You scored ' + score)
  } else {
    score = score - 1;
    console.log('You are wrong, Your score is ' + score)
  }
}

function game() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
game()