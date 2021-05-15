const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Python",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },
    {
        question: "What Does HTML Stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Trminals Motorboats",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
];

const quizz = document.getElementById('quizz');
const answerElements = document.querySelectorAll('.answer');
const questionelement = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbutton = document.getElementById('submit');

let currentQuizz = 0;
let score = 0;

loadquizz();

function loadquizz(){
    deselectAnswers();
    const currentquizzData = quizData[currentQuizz];
    questionelement.innerText = currentquizzData.question;
    a_text.innerText = currentquizzData.a;
    b_text.innerText = currentquizzData.b;
    c_text.innerText = currentquizzData.c;
    d_text.innerText = currentquizzData.d;
}
function deselectAnswers() {
    answerElements.forEach(answerEl => answerEl.checked = false);
}
function getSelected(){
    let answer;
    answerElements.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id 
        }
    })
    return answer;
}


submitbutton.addEventListener('click', () => {
    const answerr = getSelected();
    if(answerr){
        if(answerr === quizData[currentQuizz].correct){
            score++;
        }
        currentQuizz++ 
        if(currentQuizz<quizData.length){
            loadquizz();
        }
        else{
            quizz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} question correctly</h2>
            <button onclick="location.reload()">Reload</button>
        `
        }
    }
    // console.log(answer);
})
