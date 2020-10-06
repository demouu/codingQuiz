var mainEl = document.getElementById("main");
var question1El = document.getElementById("question1");
function startUp() {
    var mainContent = `
    <div class="container">
    <div class="jumbotron-fluid">
        <h1 class="display-3">Coding Quiz Challenge</h1>
        <p class="lead">Try to answer the following questions within the time limit. Keep in mind that incorrectly answering these questions will penalize you by lowering your time.</p>
        <hr class="my-2">
        <p class="lead">
            <a class="btn btn-primary btn-lg" role="button">Start Quiz!</a>
        </p>
    </div>
    </div>
    `
    mainEl.innerHTML = mainContent;
}
startUp();

function questionOne() {
    var question1 = `
    <div class="container">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">Question 1</h4>
            <p class="card-text">Commonly used data types do NOT include:</p>
            <ul id="q1List1">
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
}

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