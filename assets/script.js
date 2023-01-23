var questions = [{
    q: "String values must be enclosed within ___ when being assigned to a variable.",
    A: "Commas",
    B: "Curly Brackets",
    C: "Quotes",
    D: "Parenthesis",
    answer: "Quotes",
},

{
    q: " A very useful tool used during development and debugging for printing content to the debugger is?",
    A: "Javascript",
    B: "Terminal",
    C: "for loops",
    D: "console.log",
    answer: "console.log",
},

{
    q: "Commly used data types do not include?",
    A: "Strings",
    B: "Booleans",
    C: "Alerts",
    D: "Numbers",
    answer: "Alerts",
},
 
{   
    q: "Arrays in Javascript can be used to store ___?",
    A: "Booleans",
    B: "Other Arrays",
    C: "Numbers/Strings",
    D: "All the above",
    answer: "All the above",
 },
 
 {
    q: "The condition in an if/else statement is enclosed with ___?", 
    A: "Curly Brackets",
    B: "Quotes",
    C: "Square Brackets",
    D: "Parenthesis",
    answer: "Parenthesis",
 }];

 let timerStart = document.getElementById('timer');
 let quizBox = document.querySelector("#quiz");
 let startQuiz = document.getElementById('start');
 let countdown = 75;
 let duration;


 function timer() {
    timerStart.textContent = "Time Left: " + countdown +  " s";
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
    timerStart.textContent = "Time Left: " + countdown + " s";
}



 
 let questionStart = function (question) {
    quizBox.innerHTML = "";
 
    let quizHeader = document.createElement('h2');
    quizHeader.textContent = question.q;

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

    quizBox.appendChild(quizHeader);
    quizBox.appendChild(result1);
    quizBox.appendChild(result2);
    quizBox.appendChild(result3);
    quizBox.appendChild(result4);
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

var quiz = function(event) {
    event.preventDefault();
    resetDisplay();
    renderQuestion(questions[questionIndex]);
};

function resetDisplay() {
    quizBox.innerHTML="";
    document.querySelector("#guidelines").style.display = "none";
}










startQuiz.addEventListener("click", function(){
    timer();
    questionStart();
});

 
 
 
 
 
 
 
 
 
 
 
 





