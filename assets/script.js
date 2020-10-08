// Declaring Variables and Grabbing
var mainEl = document.getElementById("main");
var endEl = document.getElementById("end");
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
function nextQuestion(x) {
    var htmlRender = `
        <div class="container">
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
                // Decrease timer
            }

            if (question !== questionArray.length - 1) {
                question++;
                nextQuestion(question);
            } else if (question === questionArray.length - 1) {
                //Enter initials; Navigate to highscore screen
            }
            console.log("Question: " + question);
            console.log("Question Array Length: " + questionArray.length);
        }
    })
}

function startUp() {
    // 1st Question displayed as empty text.
    // question1El.innerHTML = '';
    // 2nd Question displayed as empty text.
    // question2El.innerHTML = '';
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

// Make Questions, display on screen
// Add event listener to list that targets buttons. If they click the wrong button, subtract time.
// When Start button is clicked, clear and change mainContent to new Questions
// When question is answered, render the following question.
// When questions answered incorrectly, subtract time by 10 seconds (10000ms)
// Enter initials, save highscore to localStorage
// Create a timer


// Questions I have
// 1. Template literals. What is a template literal? How to use template literals?
// 2. 

//