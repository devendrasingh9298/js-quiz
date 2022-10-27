const quizDB=[
    {
        question: "Q1: What is the fullform of HTML?",
        a: "HyperText Markup Langauge",
        b: "Hypertext Markupe Langauge",
        c: "Hypertext Markap Langauge",
        d: "Hypertext Markup Langauge",
        ans: "ans4"
    },
    {
        question: "Q2: What is the fullform of CSS?",
        a: "Cashcading style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Style seet",
        d: "Cascade Style Sheets" ,
        ans: "ans2"
    },
    {
        question: "Q3: What is the fullform of JS?",
        a: "JavaSystem",
        b: "Javascript",
        c: "JavaScript",
        d:"JavaService" ,
        ans: "ans3"
    },
    {
        question: "Q4: What is the fullform of HTTP?",
        a: "Hypertext Transfer Protocol",
        b: "Hypertext Transport Protocol",
        c: "HyperText Transfer Procedure",
        d: "Hypertext Transfer Procedure",
        ans: "ans1"
    }
];

const question =document.querySelector(`.question`);
const option1=document.querySelector(`#option1`);
const option2=document.querySelector(`#option2`);
const option3=document.querySelector(`#option3`);
const option4=document.querySelector(`#option4`);
const submit= document.querySelector(`#submit`);

const answers=document.querySelectorAll(`.answer`); 

const showScore= document.querySelector(`#showScore`);


let questionCount=0;

let score=0;
const loadQuestion=()=>{

    const questionList =  quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();


const getCheckAnswer=()=>{
    let answer;
    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked){
            answer=currAnsElem.id;
        }
    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };
     

    questionCount++;

    deselectAll();


    if(questionCount<quizDB.length){
        loadQuestion();

    }
    else{
        showScore.innerHTML = `
        <h3> Your scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()" >Play Again</button>
        `;

       showScore.classList.remove(`scoreArea`);
    }

});