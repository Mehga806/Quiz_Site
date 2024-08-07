const questions = [
    {
        question: "പാരിസിലെ ഈഫൽ ടവർ നിർമ്മിച്ചത് ആര്?",
        answers:[
            { text: "ജോൺ വെർണർ", correct: false},
            { text: "ഗുസ്തവ് ഈഫൽ", correct: true},
            { text: "വില്യം ലോഗൻ", correct: false},
            { text: "ജെ കെ റൗളിങ്", correct: false}
        ]
    },
    {
        question: "ഇന്ത്യയിലെ ഏറ്റവും പഴക്കമുള്ള വർത്തമാനപത്രം?",
        answers:[
            { text: "ബംഗാൾ ഗസറ്റ് പത്രം", correct: false},
            { text: "ദ ടൈംസ്‌ ഓഫ്‌ ഇന്ത്യ", correct: false},
            { text: "ബോംബെസമാചാർ", correct: true},
            { text: "സ്വദേശ് മിത്രൻ", correct: false}
        ]
    },
    {
        question: "ബുക്കർ സമ്മാനം നേടിയ മലയാളി വനിത?",
        answers:[
            { text: "അരുന്ധതി റോയ്", correct: true},
            { text: "സാറാ ജോർജ്", correct: false},
            { text: "ശ്രീമതി ലീന നായർ", correct: false},
            { text: "ആതിര പ്രീതറാണി", correct: false}
        ]
    },
    {
        question: "സ്റ്റീവ് ഇർവിന്റെ ബഹുമാനാർത്ഥം ഇന്ത്യയിൽ ആദ്യമായി പ്രതിമ സ്ഥാപിച്ചത് എവിടെയാണ്?",
        answers:[
            { text: "അലാങ് (ഗുജറാത്ത്)", correct: false},
            { text: "അങ്കമാലി (എറണാകുളം)", correct: false},
            { text: "ആറന്മുള (പത്തനംതിട്ട)", correct: false},
            { text: "പറശ്ശിനിക്കടവ് (കണ്ണൂർ)", correct: true}
        ]
    },
    {
        question: "ഹാരി പോട്ടർ എന്ന വിഖ്യാത കൃതിയുടെ രചയിതാവ്?",
        answers:[
            { text: "ജെ കെ റൗളിങ്", correct: true},
            { text: "ജാദവ് മൊലായ്", correct: false},
            { text: "റുഡോൾഫ് ഹെസ്", correct: false},
            { text: "ജെയിംസ് കാമറോൺ", correct: false}
        ]
    },
    {
        question: "‘മകരമഞ്ഞ്’ എന്ന സിനിമ ഏത് കലാകാരന്റെ ജീവിതമാണ് പ്രമേയമാക്കിയത്?",
        answers:[
            { text: "ഡോ. നോർമൻ ബോർലോഗ്", correct: false},
            { text: "വിക്ടോറിയ രാജ്ഞി", correct: false},
            { text: "രാജാ രവിവർമ്മ", correct: true},
            { text: "മാഡം ബിക്കാജി കാമ", correct: false}
        ]
    },
    {
        question: "‘യവനരുടെ വാത്മീകി’ എന്നറിയപ്പെടുന്ന അന്ധ കവി?",
        answers:[
            { text: "എഡ്മണ്ട് തോമസ് ക്ലിന്റ്", correct: false},
            { text: "ഗുസ്തവ് ഈഫൽ", correct: false},
            { text: "സ്‌കോട്ട് സാൽമാൻ", correct: false},
            { text: "ഹോമർ", correct: true}
        ]
    },
    {
        question: "ബുദ്ധമതത്തിന്റെ പുണ്യ ഗ്രന്ഥം ഏത്?",
        answers:[
            { text: "പീക്കിംഗ്", correct: false},
            { text: "ത്രീ പീടിക", correct: true},
            { text: "സിരിമാവോ ബണ്ഡാരനായകെ", correct: false},
            { text: "ഡാന്യൂബ്", correct: false}
        ]
    },
    {
        question: "ഡൽഹിയിലെ ലേഡീ ശ്രീരാം കോളേജിലെ പൂർവ വിദ്യാർഥിയായ ഇവർ നോബൽ സമാധാന സമ്മാന ജേതവാണ് ആരാണ് ആ വ്യക്തി?",
        answers:[
            { text: "ആ ങ്ങ് സാൻ സുചി", correct: true},
            { text: "ശക്‌തികാന്ത ദാസ്", correct: false},
            { text: "എം വിശ്വേശ്വരയ്യ", correct: false},
            { text: "ഭാനു അത്തയ്യ", correct: false}
        ]
    },
    {
        question: "ക്രെസ്കോ ഗ്രാഫ് കണ്ടെത്തിയ ഇന്ത്യൻ ശാസ്ത്രജ്ഞൻ?",
        answers:[
            { text: "അമിതാവ് ഘോഷ്", correct: false},
            { text: "യു എൻ ചാർട്ടർ", correct: false},
            { text: "വില്യം ലോഗൻ", correct: false},
            { text: "ജെ സി ബോസ്", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
          button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
     if (button.dataset.correct === "true"){
        button.classList.add("correct");
     }
     button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again ";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}



nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();