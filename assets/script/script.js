const myQuestions = [
  {
    question: "If you type the following code in the console window, what result will you get? 3>2>1 === false;",
    answers: {
      a: "True",
      b: "False"
    },
    correctAnswer: "a"
  },
  {
    question: "JavaScript is a ____ -side programming language.",
    answers: {
      a: "Client",
      b: "Server",
      c: "Both",
      d: "None"
    },
    correctAnswer: "c"
  },
  {
    question: "How do you find the minimun of x and y using JavaScript?",
    answers: {
      a: "min(x,y)",
      b: "Math.min(x,y)",
      c: "Math.min(xy)",
      d: "min(xy)"
    },
    correctAnswer: "b"
  },
  {
    question: 'If the value of x is 40, then what is the output of the following program? (x % 10 == 0)? console.log("Divisible by 10"):console.log("Not divisible by 10");',
    answers: {
      a: "ReferenceErrror",
      b: "Divisible by 10",
      c: "Not divisible by 10",
      d: "None of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "Which JavaScript label catches all the values, except for he ones specified?",
    answers: {
      a: "catch",
      b: "label",
      c: "try",
      d: "default"
    },
    correctAnswer: "d"
  },
  {
    question: "What will the code return? Boolean(3<7)",
    answers: {
      a: "true",
      b: "false",
      c: "NaN",
      d: "SyntaxError"
    },
    correctAnswer: "a"
  },
  {
    question: "Is JavaScript a case-sensitive language?",
    answers: {
      a: "true",
      b: "false"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following is the correct syntax to print a page using JavaScript?",
    answers: {
      a: "window.print()",
      b: "browser.print()",
      c: "navigator.print()",
      d: "document.print()"
    },
    correctAnswer: "a"
  },
  {
    question: "Which of the following type of variable is visible only wothin a function where it is defined?",
    answers: {
      a: "global variable",
      b: "local variable",
      c: "Both of the above",
      d: "None of the above"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following function of Number object formats with a specific number of digits to the rioght of the decimal?",
    answers: {
      a: "toExponential()",
      b: "toFixed()",
      c: "toLocaleString()",
      d: "toPrecision()"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following function of Number object defines how many total digits to display of a number?",
    answers: {
      a: "toExponential()",
      b: "toFixed()",
      c: "toLocaleString()",
      d: "toPrecision()"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of the following function of string object extracts a section of a string and retunrs a new string?",
    answers: {
      a: "toExponential()",
      b: "toFixed()",
      c: "toLocaleString()",
      d: "toPrecision()"
    },
    correctAnswer: "b"
  },
];

var timeEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var score=0;
var secondsLeft = 5;
var i=0;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     mainEl.textContent = secondsLeft + " seconds left before the Quiz Starts or click the button below";

//     if(secondsLeft <= 0) {
//       clearInterval(timerInterval);
//       startQuiz();
//     } else if (secondsLeft === 1) {
//       mainEl.textContent = secondsLeft + " second left before the Quiz Starts  or click the button below";
//     };

//   }, 1000);
// }

// save the score and show the list of Highscore
function resultQuiz() {
  console.log("result Quiz function");
  // generating dynamically the end of the quiz page and display
  mainEl.innerText="All Done";
  var divResult=document.getElementById("divend");
  var divQuestion=document.getElementById("question");
  var divAnswer=document.getElementById("answer");
  // var btnResult=document.getElementById("btnStart");
  var pTag=document.createElement("p");
  var btnSubmit=document.createElement("button");
  var txtInitial=document.createElement("input");
  var divTag=document.createElement("div");
  divResult.style.display="block";

  divQuestion.style.display="none";
  divAnswer.style.display="none";
  
  pTag.innerText="Your score is " + score;
  btnSubmit.innerText="Submit";
  btnSubmit.id="btnSubmit";
  btnSubmit.setAttribute("onclick","getInitial();");
  txtInitial.type="text";
  txtInitial.id="txt-init";
  txtInitial.style.float="left";
  divResult.appendChild(pTag);
  var pTag=document.createElement("p");
  pTag.innerText="enter your initials:"
  pTag.style.float="left";
  divTag.appendChild(pTag);
  divTag.appendChild(txtInitial);
  divResult.appendChild(divTag);
  divResult.appendChild(btnSubmit);
};

function getInitial(event) {
  // get event on Submit click and save initials + score in divHighScore
  // hiding the previous ALL DONE page
  //getting the initals entered before clicking on SUBMIT button
  var divResult=document.getElementById("divend");
  txtInit=document.getElementById("txt-init");
  divResult.style.display="none";
    
  // generating dynamically the High Score page
  divHS=document.getElementById("divHighScore");
  olTag=document.getElementById("hslist");
  
  divHS.style.display="block";

  //get data from localStorage
  scoreList=JSON.parse(window.localStorage.getItem("ListHS"));

  if (scoreList === null) {
      //localStorage is empty
      console.log("No localStorage data");
      var scoreList={
        name: [],
        points: []
      };
    } else {
      //localStorage has at least one data
      console.log("localStorage data is loading");
      for (i=0;i<scoreList.name.length;i++) {
        ilTag=document.createElement("li");
        ilTag.innerText=scoreList.name[i]+" - "+scoreList.points[i];
        console.log(ilTag.innerText);
        olTag.appendChild(ilTag);
      }; 
    };   
  
  // add the actual entry
  mainEl.innerText="High Score List";
  ilTag=document.createElement("li");
  ilTag.innerText=txtInit.value+" - "+score;
  console.log(ilTag);
  olTag.appendChild(ilTag);
  divHS.setAttribute("style","display: block;");

  //save the initials to the localStorage
  scoreList.name.push(txtInit.value);
  scoreList.points.push(score);
  window.localStorage.setItem("ListHS",JSON.stringify(scoreList));
  console.log("end of Save");
};

function displayHS(){
  var btnStart=document.getElementById("btnStart");
  btnStart.setAttribute("style","display: none;");
  var divResult=document.getElementById("divend");
  divResult.style.display="none";

  divHS=document.getElementById("divHighScore");
  olTag=document.getElementById("hslist");
  
  divHS.style.display="block";

  //get data from localStorage
  scoreList=JSON.parse(window.localStorage.getItem("ListHS"));

  if (scoreList === null) {
      //localStorage is empty
      console.log("No localStorage data");
      var scoreList={
        name: [],
        points: []
      };
    } else {
      //localStorage has at least one data
      console.log("localStorage data is loading");
      for (i=0;i<scoreList.name.length;i++) {
        ilTag=document.createElement("li");
        ilTag.innerText=scoreList.name[i]+" - "+scoreList.points[i];
        console.log(ilTag.innerText);
        olTag.appendChild(ilTag);
      }; 
    };   
  mainEl.innerText="High Score List";
};

function goBack(){
  // alert("start of Quiz");
  divHS=document.getElementById("divHighScore");
  divHS.setAttribute("style","display: none;");
  var btnStart=document.getElementById("btnStart");
  mainEl.innerHTML="CODING QUIZ";
  btnStart.setAttribute("style","display: block;");
};

//function to clear the list of HighScore
function clearHS(){
  localStorage.clear();
  // alert("clear storage");

  //removing all element from the High Score list - li tags
  var list=document.getElementById("hslist");
  list.innerHTML="";
};

var isDisplay=true;

//Function that display the question and the button for the answers
function startQuiz() {
  // secondsLeft=1;
  var buttonStart=document.getElementById("btnStart");
  buttonStart.setAttribute("style","display: none;");
  quizLeft=75;
    // var questionEl=document.getElementById("question");
    // var answerEl=document.getElementById("answer");
    var resultEl=document.getElementById("result");
    var timerInterval = setInterval(function() {
    quizLeft--;
    timeEl.innerText = "Timer: " + quizLeft;
    timeEl.setAttribute("style", "color: green;");

    if (quizLeft < 30) {
      timeEl.setAttribute("style", "color: blue;");
    };

    if (quizLeft < 10) {
      timeEl.setAttribute("style", "color: red; font-weight: bold;");
    };
  
    if(quizLeft <= 0) {
      clearInterval(timerInterval);
      resultQuiz();
    };

    // while (i<myQuestions.length) {

      var pTag=document.getElementById("pQuestion");
      var btn1=document.getElementById("btn1");
      var btn2=document.getElementById("btn2");
      var btn3=document.getElementById("btn3");
      var btn4=document.getElementById("btn4");

      if (isDisplay) {
        if (i>=myQuestions.length){
          resultQuiz();
        } else {
          mainEl.innerText="Question No. "+ (i+1);
          resultEl.innerText="";
          pTag.innerText=myQuestions[i].question;
          // console.log(myQuestions[i].question);
          if (myQuestions[i].answers.a === undefined) {
            btn1.setAttribute("style","display: none;");
          } else {
            btn1.setAttribute("style","display: block;");
            btn1.innerText="1. " + myQuestions[i].answers.a;
          };

          if (myQuestions[i].answers.b === undefined) {
            btn2.setAttribute("style","display: none;");
          } else {
            btn2.setAttribute("style","display: block;");
            btn2.innerText="2. " + myQuestions[i].answers.b;
          };

          if (myQuestions[i].answers.c === undefined) {
            btn3.setAttribute("style","display: none;");
          } else {
            btn3.setAttribute("style","display: block;");
            btn3.innerText="3. " + myQuestions[i].answers.c;
          };

          if (myQuestions[i].answers.d === undefined) {
            btn4.setAttribute("style","display: none;");
          } else {
            btn4.setAttribute("style","display: block;");
            btn4.innerText="4. " + myQuestions[i].answers.d;
          };
          console.log("correct answer is " +myQuestions[i].correctAnswer);
          isDisplay=false;
      }
    }
      // getting the click on the button to contimue to the next question
      // console.log(isDisplay);
      // if (isDisplay) {
      // };
  }, 1000);    
}
  
// Check which button has been clicked and compare with the correct answer
// Score level is update accordingly:
// +1 for good score
// -1 for wrong answer
function checkBtn(objBtn){
    console.log(objBtn.value);
    console.log(i);
    var userAnswer=objBtn.value
    var correctAudio= new Audio("./assets/sound/correct.wav");
    var incorrectAudio= new Audio("./assets/sound/incorrect.wav");
    var resultEl=document.getElementById("result");
    if (userAnswer===myQuestions[i].correctAnswer){
      resultEl.setAttribute("style","color: blue;")
      score++;
      correctAudio.play();
      resultEl.innerHTML="Good answer. Your score is "+ score;
    } else {
      resultEl.setAttribute("style","color: red;")
      quizLeft -= 10;
      incorrectAudio.play();
      resultEl.innerHTML="Wrong answer. Your score is "+ score;
    };
    i++;
    console.log(i);
    isDisplay=true;
};

goBack();

// var divHigh=document.getElementById("highScore");
// divHigh.addEventListener("click",getInitial());