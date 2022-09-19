let questions = [{
    1: "String values must be enclosed within ___ when being assigned to a variable.",
    A: "Commas",
    B: "Curly Brackets",
    C: "Quotes",
    D: "Parenthesis",
    answer: "Quotes",
},

{
    2:" A very useful tool used during development and debugging for printing content to the debugger is?",
    A:"Javascript",
    B:"Terminal",
    C:"for loops",
    D:"console.log",
    answer: "console.log",
},

{
    3:"Commly used data types do not include?",
    A:"Strings",
    B:"Booleans",
    C:"Alerts",
    D:"Numbers",
    answer: "Alerts",
},
 
{   
    4:"Arrays in Javascript can be used to store ___?",
    A:"Booleans",
    B:"Other Arrays",
    C:"Numbers/Strings",
    D:"All the above",
    answer: "All the above",
 },
 
 {
    5:"The condition in an if/else statement is enclosed with ___?", 
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

 document.getElementById(start).addEventListener('click', timer);

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

    questionBox.appendChild(questionBox);
    questionBox.appendChild(result1);
    questionBox.appendChild(result2);
    questionBox.appendChild(result3);
    questionBox.appendChild(result4);
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 function timer() {
    timerStart.textContent = "Time Left" + countdown;
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
    timerStart.textContent = "Time Left" + countdown;
}







