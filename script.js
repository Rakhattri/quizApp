
const quizData = [
    {question:"1. What does CSS stand for in web development ?",
    a: "Computer Style Sheets",
    b: "Creative Style Selector",
    c: "Cascading Style Sheets",
    d: "Cool Styling System",
    correct : "c"
    },
    {question:"2 .Which JavaScript method is used to add an element to the end of an array? ?",
    a: "push()",
    b: "append()",
    c: "addToEnd()",
    d: "concat()",
    correct : "b"
    },
    {question:"3. Which HTML tag is used to create a hyperlink?",
    a: "<link>",
    b: "<a>",
    c: "<href>",
    d: "<url>",
    correct : "c"
    },
    {question:"4. How can you comment out a block of code in JavaScript?",
    a:" /* This is a comment */",
    b: "// This is a comment",
    c: "<!-- This is a comment -->",
    d: "# This is a comment",
    Correct: "a"
        },
];

const quiz = document.querySelector("#quiz");
const questionElement = document.querySelector("#question");
const answerElements = document.querySelectorAll(".answer");
const a_Text = document.getElementById("a-text");
const b_Text = document.getElementById("b-text");
const c_Text = document.getElementById("c-text");
const d_Text = document.getElementById("d-text");
const nextBtn = document.querySelector(".next");


let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
    answerElements.forEach((answer) => {answer.checked = false});
};
const getSelected = () =>{
    let answer;
    answerElements.forEach((answerElements) =>{
        if (answerElements.checked) answer = answerElements.id
    });
    return answer;
    };

    const loadQuiz = () =>{
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_Text.innerText = currentQuizData.a;
        b_Text.innerText = currentQuizData.b;
        c_Text.innerText = currentQuizData.c;
        d_Text.innerText = currentQuizData.d;
    };

    loadQuiz();
    nextBtn.addEventListener("click", () =>{
        const answer = getSelected();
        if (answer) {
            if(answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizData.length) loadQuiz();
            else{
                quiz.innerHTML = `<h2> You answered ${score}/${quizData.length}question correctly.</h2>
                <button onclick = "history.go(0)">Play Again</button>`
            }
        }
    });