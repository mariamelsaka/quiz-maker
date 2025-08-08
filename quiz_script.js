const questions=[
    {
        question:"I Never Miss A Football Match. I ______ Fond Of It Since My Childhood",
        answers:[
            {text:"am",correct:"false"},
            {text:"Have Been",correct:"true"},
            {text:"has been",correct:"false"},
            {text:"will be",correct:"false"},
        ],
    },
    {
        question:"They Are Talking _______ A Confidential Matter, So Do Not Interrupt.",
        answers:[
            {text:"for",correct:"false"},
            {text:"Over",correct:"true"},
            {text:"on",correct:"false"},
            {text:"in",correct:"false"},
        ],
    },
    {
        question:"Q : 'Cease' Choose The One Which Best Expresses The Meaning Of The Word:",
        answers:[
            {text:"begin",correct:"false"},
            {text:"Stop",correct:"true"},
            {text:"Create",correct:"false"},
            {text:"dull",correct:"false"},
        ],
    },
    {
        question:"Q :  'Abandon' Choose the one which best expresses the meaning of the word:",
        answers:[
            {text:"Keep",correct:"false"},
            {text:"Fosake",correct:"true"},
            {text:"Cherish",correct:"false"},
            {text:"Enlarge",correct:"false"},
        ],
    }
]

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextBtn=document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function StartQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("Btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
const selectedBtn=e.target;
const isCorrect=selectedBtn.dataset.correct=="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextBtn.style.display="block";

}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML="play again";
    nextBtn.style.display="block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        StartQuiz();
    }
})


StartQuiz();
    

