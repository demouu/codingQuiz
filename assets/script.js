// Declaring Global Variables
var mainEl = document.getElementById("main");
var question = 0;
var questionArray = [
    {
        question: "According to the Owl, how many licks does it take to get to the Tootsie center of a Tootsie pop?",
        answers: ["12", "3", "99", "24"],
        correctA: "3"
    },

    {
        question: "What flavor profile do Reese's Puffs have?",
        answers: ["Vanilla and Chocolate", "Cinammon and Chocolate", "HTML and JavaScript", "Peanut Butter and Chocolate"],
        correctA: "Peanut Butter and Chocolate"
    },

    {
        question: "What is the price of a Footlong at Subway?",
        answers: ["Three Dollar", "Seven Dollar", "Five Dollar", "Ten Dollar"],
        correctA: "Five Dollar"
    },
    {
        question: "Forrest Gump: Life is like a ______. You never know what you're gonna get.",
        answers: ["Rollercoaster", "Box of Chocolates", "Lottery", "Math.floor(Math.random())"],
        correctA: "Box of Chocolates"
    },
    {
        question: "Which of the following is not a planet?",
        answers: ["Pluto", "Earth", "Neptune", "Mars"],
        correctA: "Pluto"
    }

]
// Create Timer
var timerCount = 60, timer = setInterval(function () {
    $("#timer").html("Time: " + timerCount--);
    if (timerCount === 0) clearInterval(timer);
}, 1000);

function nextQuestion(x) {
    var htmlRender = `
        <div class="container">
        <h2 id="timer"></h2>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Question ${question + 1}</h4>
                <p class="card-text">${questionArray[x].question}</p>
                <ul id="questionList">
                    <li>
                        <button data-answer = "${questionArray[x].answers[0]}">${questionArray[x].answers[0]}</button>
                    </li>
                    <li>
                        <button data-answer = "${questionArray[x].answers[1]}">${questionArray[x].answers[1]}</button>
                    </li>
                    <li>
                        <button data-answer = "${questionArray[x].answers[2]}">${questionArray[x].answers[2]}</button>
                    </li>
                    <li>
                        <button data-answer = "${questionArray[x].answers[3]}">${questionArray[x].answers[3]}</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
    mainEl.innerHTML = htmlRender;
    document.getElementById("questionList").addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            var clickedValue = event.target.getAttribute("data-answer");
            console.log("Clicked Value: " + clickedValue);
            console.log("Correct Answer: " + questionArray[x].correctA);
            console.log(event.target);
            if (clickedValue === questionArray[x].correctA) {
                console.log("correct");
            } else {
                console.log("false");
                timerCount = timerCount - 10;
            }

            if (question !== questionArray.length - 1) {
                question++;
                nextQuestion(question);
            } else if (question === questionArray.length - 1) {
                endQuiz(timerCount);
                //Enter initials; Navigate to highscore screen
            }
            console.log("Question: " + question);
            console.log("Question Array Length: " + questionArray.length);
        }
    })
}

function startUp() {
    // Utilizing Template Literals for dynamic HTML elements
    var mainContent = `
    <div class="container">
    <div class="jumbotron-fluid">
        <h1 class="display-3">Random Quiz Challenge</h1>
        <p class="lead">Try to answer the following questions within the time limit. Keep in mind that incorrectly answering these questions will penalize you by lowering your time.</p>
        <hr class="my-2">
        <p class="lead">
            <a class="btn btn-primary btn-lg" role="button" id="startQuiz">Start Quiz!</a>
        </p>
    </div>
    </div>
    `
    mainEl.innerHTML = mainContent;
    document.getElementById("startQuiz").addEventListener("click", function () {
        mainContent.innerHTML = '';
        nextQuestion(question);
    })
}
startUp();

function endQuiz(timeFinalScore) {
    var endScreen = `
<div class="container">
    <div class="jumbotron-fluid">
        <h1 class="display-3">Quiz Over!</h1>
            <p class="lead">Enter your initials to save your score!</p>
            <hr class="my-2">
            <p class="lead">
            <input type="text" id="initials"/>
            <a class="btn btn-primary btn-lg" role="button" id="submitScore">Submit Score!</a>
        </p>
        <div class="card text-left">
            <div class="card-body">
                <h4 class="card-title">High Scores</h4>
                <p class="card-text" id="scores"></p>
            </div>
        </div>
    </div>
</div>
    `
    mainEl.innerHTML = endScreen;
    var initials = document.getElementById("initials");
    document.getElementById("submitScore").addEventListener("click", function () {
        var highScoreArray = localStorage.getItem("highscore") || [];
        var parsed;
        if (highScoreArray.length !== 0){
            parsed = JSON.parse(highScoreArray);
        } else {
            parsed = [];
        }
        var temp = {
            initials: initials.value,
            score: timeFinalScore
        }
        parsed.push(temp);
        localStorage.setItem("highscore", JSON.stringify(parsed));
        for (var i = 0; i < parsed.length; i++) {
            var score = document.createElement("p");
            score.innerText = parsed[i].initials + " " + parsed[i].score;
            document.getElementById("scores").append(score);
        }
    })
    console.log(initials);
}