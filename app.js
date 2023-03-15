const optionInput=document.querySelectorAll('.options')
let index=0; 


const question=[{
     'que':'which of the following is a markup language?',
     'a': 'HTML',
     'b': 'CSS',
     'c':'Javascript',
     'd':'PHP',
     'correct':'a',
},
{
    'que':'What year was javascript launched?',
    'a':'1996',
    'b' :'1995',
    'c':'1994',
    'd':'none of this',
    'correct':'b'
},
{
    'que':'what does css stans for?',
    'a':'Hyper text markup language',
    'b':'Cascading style sheet',
    'c':'jason object notation',
    'd':'none of this',
    'correct':'b'
}
]

let total=question.length;
let right=0;
let wrong=0;
 const loadquestion = () =>{
    if(index===total){
        return endQuiz()
    }
     reset();
     const data=question[index];
     console.log(data);
     const quebox=document.getElementById('quebox');
     quebox.innerText=`${index+1})${data.que}`;
     const optionInput=document.querySelectorAll('.options')
     optionInput[0].nextElementSibling.innerText=data.a;
     optionInput[1].nextElementSibling.innerText=data.b;
     optionInput[2].nextElementSibling.innerText=data.c;
     optionInput[3].nextElementSibling.innerText=data.d;
     const optionInputss=Array.from(optionInput)
     console.log(optionInputss)
 }
const submitQuiz =()=>{
    const ans=getAnswer()
    console.log(ans)
     const data=question[index];
    console.log(data.correct)
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return
}

const getAnswer = () =>{
    let answer;
optionInput.forEach(
    (input) => {
    if(input.checked){
        answer= input.value;
    }
}
)
return answer;
}

const reset =()=>{
    optionInput.forEach((input)=>{
        input.checked=false;
    })
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML=`<h3>Thanks You for playing</h3>
    <h2>${right}/${total}are correct</h2>
    `
}
loadquestion();