var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

var questions = [
    {
        title: "What is JavaScript?",
        choices: ["JavaScript is a scripting language used to make the website interactive", "JavaScript is an assembly language used to make the website interactive", "JavaScript is a compiled language used to make the website interactive", "None of the mentioned"],
        answer: "JavaScript is a scripting language used to make the website interactive"
    },
    {
        title: "Which of the following is correct about JavaScript?",
        choices: ["JavaScript is an Object-Based language", "JavaScript is Assembly-language", "JavaScript is an Object-Oriented language", "JavaScript is a High-level language"],
        answer: "JavaScript is an Object-Based language"
    },
    {
        title: "Among the given statements, which statement defines closures in JavaScript?",
        choices: ["JavaScript is a function that is enclosed with references to its inner function scope", "JavaScript is a function that is enclosed with references to its lexical environment", "JavaScript is a function that is enclosed with the object to its inner function scope", "all of the above"],
        answer: "JavaScript is a function that is enclosed with references to its lexical environment"
    },
    {
        title: "Which of the following are not javascript data types?",
        choices: ["Null type", "Undefined type", "Number type", "All of the mentioned"],
        answer: "All of the mentioned"
    },
    {
        title: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        choices: ["Position", "Window", "Standard", "Location"],
        answer: "Window"
    },

];

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});



