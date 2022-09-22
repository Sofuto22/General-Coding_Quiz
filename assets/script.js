let questions = [{
    q: "String values must be enclosed within ___ when being assigned to a variable.",
    A: "Commas",
    B: "Curly Brackets",
    C: "Quotes",
    D: "Parenthesis",
    answer: "Quotes",
},

{
    q:" A very useful tool used during development and debugging for printing content to the debugger is?",
    A:"Javascript",
    B:"Terminal",
    C:"for loops",
    D:"console.log",
    answer: "console.log",
},

{
    q:"Commly used data types do not include?",
    A:"Strings",
    B:"Booleans",
    C:"Alerts",
    D:"Numbers",
    answer: "Alerts",
},
 
{   
    q:"Arrays in Javascript can be used to store ___?",
    A:"Booleans",
    B:"Other Arrays",
    C:"Numbers/Strings",
    D:"All the above",
    answer: "All the above",
 },
 
 {
    q:"The condition in an if/else statement is enclosed with ___?", 
    A:"Curly Brackets",
    B:"Quotes",
    C:"Square Brackets",
    D:"Parenthesis",
    answer: "Parenthesis",
 }];

 let timerStart = document.getElementById('timer');
 let questionBox = document.getElementById ('#quiz'); 
 let startQuiz = document.getElementById('start');
 let countdown = 75;
 let duration;


 function timer() {
    timerStart.textContent = "Time Left " + countdown +  "s";
    duration = setInterval(function() {
        if (countdown > 0) {
           reduceTime(-1); 
        } else {
            quizOver();
        }
    }, 1000);
}

function reduceTime(remaining) {
    countdown += remaining;
    if (countdown < 0) {
        countdown = 0;
    }
    timerStart.textContent = "Time Left " + countdown + "s";
}









 startQuiz.onclick = timer;
 let questionStart = function(question) {
    questionBox.innerHTML = '';
 
    let header = document.createElement('h2');
    header.textContent = question.q;

    let result1 = document.createElement('button');
    result1.textContent = question.a;
    result1.addEventListener('click', answerClick);

    let result2 = document.createElement('button');
    result2.textContent = question.b;
    result2.addEventListener('click', answerClick);

    let result3 = document.createElement('button');
    result3.textContent = question.c;
    result3.addEventListener('click', answerClick);

    let result4 = document.createElement('button');
    result4.textContent = question.d;
    result4.addEventListener('click', answerClick);

    questionBox.appendChild(header);
    questionBox.appendChild(result1);
    questionBox.appendChild(result2);
    questionBox.appendChild(result3);
    questionBox.appendChild(result4);
}

let questionIndex = 0;
let playerScore = 0;
let correctChoice = questions[questionIndex].answer;
let recentScores =  document.getElementById('scores');

let answerClick = function(event) {
    
    let playerAnswer = event.target.textContent;
    correctChoice = questions[questionIndex].answer;
    
    let playerChoice = document.querySelector('#points');
    
    if (playerAnswer !== correctChoice) {
        reduceTime(-15);
        playerChoice.textContent = 'Incorrect';
        questionIndex++;
    
    if (questionIndex >= questions.length) {
        finishQuiz();
    
    } else {questionStart(questions[questionIndex])};   
 

    } else if (playerAnswer === correctChoice) {
    questionIndex++;
    correctChoice.textContent = 'Correct';
    playerScore++;
    
    if (questionIndex >= questions.length) {
        finishQuiz();
    } else {questionStart(questions[questionIndex])};

  }

};
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





