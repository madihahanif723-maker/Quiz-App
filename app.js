var currentUser = "";

function login() {
    var userName = document.getElementById("UserName").value.trim();
    var rollNumber = document.getElementById("rollNumber").value.trim();
    if (userName && rollNumber) {
        currentUser = userName.charAt(0).toUpperCase() + userName.slice(1);
        Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Welcome! " + currentUser,
        });
        window.location.href = "quiz.html";
    }
    else {
        Swal.fire({
            title: "Wait a moment!",
            text: "Please enter your name and roll number to begin.",
            icon: "warning",
            confirmButtonText: "Got it!",
            confirmButtonColor: "#3",
        });
    }
}
function logout() {
    Swal.fire({
        title: "Are you sure you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log out",
        cancelButtonText: "No, stay logged in",
        confirmButtonColor: "#3a5e3b",
        cancelButtonColor: "#d33",
    }).then((result) => {
        if (result.isConfirmed) {
            currentUser = "";
            window.location.href = "index.html";
        }
    });
}
var QuizData = [{
    question: "Q1:Which method adds one or more elements to the end of an array and returns the new length?",
    Option1: "push()",
    Option2: "pop()",
    Option3: "shift()",
    Option4: "unshift()",
    Answer: "push()"
}, {
    question: "Q2: Which of the following is not a JavaScript data type?",
    Option1: "Undefined",
    Option2: "Boolean",
    Option3: "String",
    Option4: "Character",
    Answer: "Character",
},  {
    question: "Q3:Which symbol is used for single-line comments in JavaScript?",
    Option1: "//",
    Option2: "##",
    Option3: "*/",
    Option4: "<--",
    Answer: "//",
}, {
    question: "Q4:What is the primary purpose of console.log in JavaScript?",
    Option1: "To display alert",
    Option2: "To output message to the console",
    Option3: "To create HTML element",
    Option4: "To handle events",
    Answer: "To output message to the console",
},
{
    question: "Q5:What is the primary purpose of the 'Hello World' program in JavaScript?",
    Option1: "To display a greeting message",
    Option2: " To perform calculations",
    Option3: " To create variables",
    Option4: "To define functions",
    Answer: "To display a greeting message",
}, {
    question: "Q6:Which of the following can be logged using console.log?",
    Option1: "Numbers",
    Option2: "Strings",
    Option3: "Objects",
    Option4: "ALL of the above",
    Answer: "ALL of the above",
}, {
    question: "Q7: How do you create a multi-line comment in JavaScript?",
    Option1: "// comment",
    Option2: "<-- comment -->",
    Option3: "/* comment */",
    Option4: "# comment",
    Answer: "/* comment */",
}, {
    question: "Q8:How do you view the output of console.log?",
    Option1: "In the browser alert",
    Option2: "In the console panel of developer tools",
    Option3: "On the webpage",
    Option4: "In an external file",
    Answer: "In the console panel of developer tools",
}, {
    question: "Q9: What will the following JavaScript code output: console.log('Hello World!');?",
    Option1: "Hello",
    Option2: "World",
    Option3: "Hello World!",
    Option4: "undefined",
    Answer: "Hello World!",
},{
    question: "Q10: Which function is used to serialize an object into a JSON string?",
    Option1: "JSON.parse()",
    Option2: "JSON.stringify()",
    Option3: "JSON.serialize()",
    Option4: "JSON.convert()",
    Answer: "JSON.stringify()",
}]
var index = 0;
var score = 0;
function displayContainer() {
    document.getElementById("displayCard").style.display = "block";
    document.getElementById("displayCard").innerHTML = `<div  id="quizContainer">
     <div class="quiz-card mb-4" id="displayArea">
                    <h3 class="fw-bold mb-4">${QuizData[index].question}</h3>
                    <div class="options-group">
                        <label class="option-label">
                            <input type="radio" name="option" class="form-check-input" value="${QuizData[index].Option1}">
                            <span>${QuizData[index].Option1}</span>
                        </label>
                        <br>
                        <label class="option-label">
                            <input type="radio" name="option" class="form-check-input" value="${QuizData[index].Option2}">
                            <span>${QuizData[index].Option2}</span>
                        </label>
                        <br>
                        <label class="option-label">
                            <input type="radio" name="option" class="form-check-input" value="${QuizData[index].Option3}">
                            <span>${QuizData[index].Option3}</span>
                        </label>
                        <br>
                        <label class="option-label">
                            <input type="radio" name="option" class="form-check-input" value="${QuizData[index].Option4}">
                            <span>${QuizData[index].Option4}</span>
                        </label>
                    </div>
                </div>

                <div class="d-flex justify-content-between">
                    <button class="btn butcol btn-nav" onclick="previousQuiz()"> Previous</button>
                    <button class="btn butncol btn-nav text-white" onclick="nextQuiz()">Next </button>
                </div>
            </div>`
} displayContainer()
function nextQuiz() {
    if (index < QuizData.length - 1) {
        index++
        displayContainer()
    }
}
function previousQuiz() {
    if (index > 0) {
        index--;
        displayContainer()
    }
}
