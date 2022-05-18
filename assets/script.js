let questions = [
    
    "Which HTML element do we put in for JavaScript?:",
    "How do you create a function in JavaScript?:",
    "Which of these are considered Javascript data types?:", 
    "How do you declare a JavaScript variable?:", 
    "What color is the sky?:",
    // "Bonus Question: In javascript One = ___",
  
];

let choices = {
    "Which HTML element do we put in for JavaScript?:" : ["javascript", "script", "java", "jabba"],
    "How do you create a function in JavaScript?:": ["function = myFunction()", "Function = My Function()", "myFunction[]", "yourFunction()"],
    "Which of these are considered Javascript data types?:" : ["Buttons, ABC, Bolognese", "Beta, Delta, Kappa", "Shoelaces, Words, Boo", "String, Number, Boolean"],
    "How do you declare a JavaScript variable?:": ["var colorName", "variableColorName", "varvar Color Name", "var Color()"],
    "What color is the sky?:": ["green", "purple", "blue", "pink"],
    // "Bonus Question: In javascript One = ___:" : ["One", "Uno!", "Zero", "Eleven"],
    
    
};

let answers = {
    "Which HTML element do we put in for JavaScript?:": "second-choice",
    "How do you create a function in JavaScript?:" : "first-choice",
    "Which of these are considered Javascript data types?:": "fourth-choice",
    "How do you declare a JavaScript variable?:" : "first-choice",
    "What color is the sky?": "third-choice",
    // "Bonus Question: In javascript One = ___:" : "third-choice",
    
}

var score;

function code() {
    document.getElementById("options").style.display = 'none';
    document.getElementById("answer-check").style.display = 'none';
    document.getElementById('high-score').style.display = 'none';
}

var seconds = 75;
function startTimer() {
    interval = setInterval(function() {
        document.getElementById("timer").textContent = seconds--
        if (seconds == 0) {
            document.getElementById("timer").textContent = 0;
            score = 0;
            switchToHighScoreSubmition()
            return;
        }
    }, 1000)
}

function clearScreen() {
    startTimer()
    document.getElementById("title").style.display = 'none';
    document.getElementById("intro").style.display = 'none';
    document.getElementById("start-button").style.display = 'none';
    document.getElementById("first-choice").addEventListener("click", answerClickEventHandler);
    document.getElementById("second-choice").addEventListener("click", answerClickEventHandler);
    document.getElementById("third-choice").addEventListener("click", answerClickEventHandler);
    document.getElementById("fourth-choice").addEventListener("click", answerClickEventHandler);
    setupQuestion();
}

let i = 0;
let wrongAnswers = 0;
function checkAnswer(elementId) {
    document.getElementById("answer-check").style.display = "block"
    if (elementId == answers[questions[i]]) {
        document.getElementById("check").innerHTML = "Precisely!";
    } else {
        document.getElementById("check").innerHTML = "Wrong-O!";
        seconds -= 10;
    }
}

function setupQuestion() {
    document.getElementById("options").style.display = 'block';
    document.getElementById("question").innerHTML = questions[i]
    document.getElementById("first-choice").innerHTML = "1. " + choices[questions[i]][0];
    document.getElementById("second-choice").innerHTML = "2. " + choices[questions[i]][1];
    document.getElementById("third-choice").innerHTML = "3. " + choices[questions[i]][2];
    document.getElementById("fourth-choice").innerHTML = "4. " + choices[questions[i]][3];
}

function switchToHighScoreSubmition() {
    document.getElementById("question").style.display = 'none';
    document.getElementById("options").style.display = 'none';
    document.getElementById("answer-check").style.display = 'none';
    document.getElementById("timer").style.display = 'none';
    document.getElementById("high-score").style.display = 'block';
    if (score == 0) {
        document.getElementById("score").innerHTML = "Final Score: 0";
    }
}

const answerClickEventHandler = (event) => {

    if (i >= 3) {
        score = document.getElementById("timer").textContent;
        document.getElementById("score").innerHTML = "Final Score: " + score;
        document.getElementById("timer").style.display = 'none';
        switchToHighScoreSubmition();
        return;
    }
    checkAnswer(event.currentTarget.id);
    i++;
    setupQuestion();
}

var initialsBox = document.querySelector("#initials-box");
var highScores = {};
var submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", gettingHighScoreAndInitials);

function gettingHighScoreAndInitials(event) {
    event.preventDefault()
    var scoreSentence = document.querySelector("#score")
    console.log("Storing initials and score")
    localStorage.setItem(initialsBox.value, score)
    console.log("Stored initials and score")
    highScores[initialsBox.value] = score;
    console.log(highScores);
    return;
}
function highscoreFunction() {
    
    let j;
    let highScoresSorted = {};
    let sortable = [];
    function getDataFromLocalStorage() {
        ol = document.getElementById('list')
        for (j = 0; j < localStorage.length; j++) {
            
            let li = document.createElement('li')
            ol.appendChild(li);
            li.textContent = localStorage.key(j) + " " + localStorage[localStorage.key(j)]
            li.className = "highscore";

        }
    }
    getDataFromLocalStorage()
    console.log(sortable);
}

function clearData() {
    localStorage.clear()
    document.location = "index.html"
}