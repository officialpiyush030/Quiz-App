const questions=[
    {
        question:"Who is the PM of India?",
        answer:[
            {text:"Amit Shah",correct:false},
            {text:"Modi",correct:true},
            {text:"Yogi",correct:false},
            {text:"Nehru",correct:false}
        ]
    },
    {
        question:"Who is the CM of India?",
        answer:[
            {text:"Amit Shah",correct:false},
            {text:"Modi",correct:false},
            {text:"Yogi",correct:true},
            {text:"Nehru",correct:false}
        ]
    },
    {
        question:"Who is the President of India?",
        answer:[
            {text:"Amit Shah",correct:false},
            {text:"Modi",correct:false},
            {text:"Yogi",correct:false},
            {text:"RajNathGovind",correct:true}
        ]
    },
    {
        question:"Who is not the Member of Parliament of India?",
        answer:[
            {text:"Amit Shah",correct:false},
            {text:"Modi",correct:false},
            {text:"Yogi",correct:false},
            {text:"Nehru",correct:true}
        ]
    },
]

const qtn=document.getElementById("qtn");
const ans=document.getElementById("ans");
const next=document.getElementById("next");
let currqueindex=0;
let score=0;

function startquiz(){
    currqueindex=0;
    score=0;
    next.innerHTML="Next";
    showque();
}
function showque(){
    let currque=questions[currqueindex];
    let queno=currqueindex+1;
    qtn.innerHTML= queno + "." + currque.question;

    ans.innerHTML="";
      
    currque.answer.forEach(answer=>{
        const buttn=document.createElement("button");
        buttn.innerHTML=answer.text;
        buttn.classList.add("btn");
        buttn.addEventListener("click",()=>selectans(buttn,answer.correct));
        ans.appendChild(buttn);
    })
};
function selectans(buttn,correct){
        if(correct){
            buttn.classList.add("correct");
            score++;
        }
        else{
        buttn.classList.add("incorrect");}


        Array.from(ans.children).forEach(btn=>{
            btn.disabled=true;
            if(btn.innerHTML ==questions[currqueindex].answer.find(a=>a.correct).text){
                btn.classList.add("correct");
            }
        });
         next.style.display="block";
       
    }

    function showscore(){
        qtn.innerHTML=`Your score is ${score} out of ${questions.length}!`
        ans.innerHTML="";
        next.innerHTML="Play Again";
        next.style.display="block";

    }
    next.addEventListener("click", () => {
    const anyselected=Array.from(ans.children).some(btn=>btn.disabled);
    if(!anyselected){
        alert("Please select any answer");
        return;
    }
    if (next.innerHTML === "Play Again") {
        startquiz();
    } else if (currqueindex < questions.length - 1) {
        currqueindex++;
        showque();
    } else {
        showscore();
    }
});
startquiz();