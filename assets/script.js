// Declaring Variables and Grabbing
var mainEl = document.getElementById("main");
var question1El = document.getElementById("question1");
var question2El = document.getElementById("question2");
var question3El = document.getElementById("question3");
var question4El = document.getElementById("question4");
var question5El = document.getElementById("question5");
var endEl = document.getElementById("end");
function startUp() {
    // 1st Question displayed as empty text.
    question1El.innerHTML = '';
    // 2nd Question displayed as empty text.
    question2El.innerHTML = '';
    // Utilizing Template Literals for dynamic HTML elements
    var mainContent = `
    <div class="container">
    <div class="jumbotron-fluid">
        <h1 class="display-3">Coding Quiz Challenge</h1>
        <p class="lead">Try to answer the following questions within the time limit. Keep in mind that incorrectly answering these questions will penalize you by lowering your time.</p>
        <hr class="my-2">
        <p class="lead">
            <a class="btn btn-primary btn-lg" role="button" id="startQuiz">Start Quiz!</a>
        </p>
    </div>
    </div>
    `
    mainEl.innerHTML = mainContent;
    // JQuery Click event listener to start the quiz
    $("#startQuiz").on("click", function () {
        // Upon Quiz Start, mainEl disappears and question1El Appears.
        mainEl.innerHTML = '';
        // Question 1 Template Literal
        var question1 = `
        <div class="container">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Question 1</h4>
                <p class="card-text">Commonly used data types do NOT include:</p>
                <ul class="questionList">
                    <li>
                        <button id="q1A1">1. Strings</button>
                    </li>
                    <li>
                        <button id="q1A2">2. Booleans</button>
                    </li>
                    <li>
                        <button id="q1A3">3. Alerts</button>
                    </li>
                    <li>
                        <button id="q1A4">4. Numbers</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
        question1El.innerHTML = question1;
        $(".questionList").on("click", function (event) {
            if (event.target.matches("button")) {
                question1El.innerHTML = '';
                var question2 = `
            <div class="container">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Question 2</h4>
                    <p class="card-text">The condition within an if / else statement is enclosed within ____.</p>
                    <ul class="questionList">
                        <li>
                            <button id="q2A1">1. Quotes</button>
                        </li>
                        <li>
                            <button id="q2A2">2. Curly Brackets</button>
                        </li>
                        <li>
                            <button id="q2A3">3. Parentheses</button>
                        </li>
                        <li>
                            <button id="q2A4">4. Square Brackets</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `
                question2El.innerHTML = question2;
                $(".questionList").on("click", function (event) {
                    if (event.target.matches("button")) {
                        question2El.innerHTML = '';
                        var question3 = `
                <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Question 3</h4>
                        <p class="card-text">Arrays in JavaScript can be used to store ____.</p>
                        <ul class="questionList">
                            <li>
                                <button id="q3A1">1. Numbers and Strings</button>
                            </li>
                            <li>
                                <button id="q3A2">2. Other Arrays</button>
                            </li>
                            <li>
                                <button id="q3A3">3. Booleans</button>
                            </li>
                            <li>
                                <button id="q3A4">4. All of the Above</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            `
                        question3El.innerHTML = question3;
                        $(".questionList").on("click", function (event) {
                            if (event.target.matches("button")) {
                                question3El.innerHTML = '';
                                var question4 = `
                                <div class="container">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Question 4</h4>
                                        <p class="card-text">String values must be enclosed within ____ when being assigned to variables.</p>
                                        <ul class="questionList">
                                            <li>
                                                <button id="q4A1">1. Commas</button>
                                            </li>
                                            <li>
                                                <button id="q4A2">2. Curly Brackets</button>
                                            </li>
                                            <li>
                                                <button id="q4A3">3. Quotes</button>
                                            </li>
                                            <li>
                                                <button id="q4A4">4. Parentheses</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            `
                                question4El.innerHTML = question4;
                                $(".questionList").on("click", function (event) {
                                    if (event.target.matches("button")) {
                                        question4El.innerHTML = '';
                                        var question5 = `
                                    <div class="container">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="card-title">Question 5</h4>
                                            <p class="card-text">A very useful tool during development and debugging for printing content to the debugger is:</p>
                                            <ul class="questionList">
                                                <li>
                                                    <button id="q5A1">1. JavaScript</button>
                                                </li>
                                                <li>
                                                    <button id="q5A2">2. For Loops</button>
                                                </li>
                                                <li>
                                                    <button id="q5A3">3. Terminal / Bash</button>
                                                </li>
                                                <li>
                                                    <button id="q5A4">4. console.log</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                `
                                        question5El.innerHTML = question5;
                                        $(".questionList").on("click", function (event){
                                            if (event.target.matches("button")){
                                                question5El.innerHTML = '';
                                                var end = `
                                                <div class="container">
                                                <div class="jumbotron-fluid">
                                                    <h1 class="display-3">Complete!</h1>
                                                    <p class="lead">That's all folks!</p>
                                                    <hr class="my-2">
                                                    <p class="lead">
                                                    <input type="text"/>
                                                    <input class="btn btn-primary" type="submit" value="Submit Score">
                                                    </p>
                                                </div>
                                                </div>
                                                `
                                                endEl.innerHTML = end;
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
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