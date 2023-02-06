import "./Quiz.css";
import { quizQuestions } from "../../data/quizQA";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";
import { quizMasterLevel } from "../../utils/quizMasterLevel";
let actualQuestionIndex = 0;
let actualQuestionId = "";
let correctAnswer = "";
let correctCounter = 0;
const template = () => ` 
${returnBtn()}
<section class="quizGame">
   
    <h1>Pokemon Quiz</h1>
    <h2>Are you a qualified Pokemon trainer?</h2>

    <div class="playerProfile" id="playerProfile">
        <div>
        <img src=${localStorage.getItem("icon")} alt="player avatar"/>
        <h4>${localStorage.getItem("user")}</h4>
        </div>
        <p id="numCorrectAnswers">Correct answers: ${(correctCounter = 0)}</p>
    </div>

    <section class="quizContainer" id="quizContainer"></section>
    <div class="quizBtns" id="quizBtns">
        <button class="nextQuestion" id="nextQuestion">Next question</button>
        <button class="quizResult" id="quizResult">Show result</button>
    </div>


    <div class="modalWindow" id="modalWindow">
        <div class="resultModal" id="resultModal">
            <div class="message">
                <h5 id="trainerLevel" class="trainerLevel"></h5>
                <img  alt="trainerLevelImg" id= "trainerLevelImg" class="trainerLevelImg"/>
            </div>
            <button class="closeResultModal" id="closeResultModal">Close</button>
        </div>
    </div>    
</section>

`;

const printQuiz = (quizQuestions, i) => {
  const nextQuestionBtn = document.querySelector("#nextQuestion");
  nextQuestionBtn.disabled = true;

  const container = document.querySelector("#quizContainer");
  container.innerHTML = "";

  const figure = document.createElement("figure");
  figure.classList.add("quizQuestion");
  const qABlock = document.createElement("div");
  const h3 = document.createElement("h3");
  const qImage = document.createElement("img");
  qABlock.classList.add("QandA");

  actualQuestionId = quizQuestions[i].id;
  correctAnswer = quizQuestions[i].correctAnswer;

  console.log(actualQuestionId);

  h3.textContent = quizQuestions[i].question;
  qImage.src = quizQuestions[i].image;
  qImage.alt = "question image";

  qABlock.appendChild(qImage);
  qABlock.appendChild(h3);

  figure.appendChild(qABlock);
  figure.appendChild(qImage);
  container.appendChild(figure);

  for (const answer of quizQuestions[i].answers) {
    const answerBtn = document.createElement("button");
    answerBtn.classList.add("questionAnswer");
    answerBtn.textContent = answer;
    qABlock.appendChild(answerBtn);
  }
};

const addListeners = () => {
  const nextQuestionBtn = document.querySelector("#nextQuestion");
  const answerBtns = document.querySelectorAll(".questionAnswer");
  const numCorrectAnswers = document.querySelector("#numCorrectAnswers");

  for (const answerBtn of answerBtns) {
    answerBtn.addEventListener("click", () => {
      for (const btn of answerBtns) {
        btn.disabled = true;
      }

      if (answerBtn.textContent === correctAnswer) {
        answerBtn.style.backgroundColor = "green";
        correctCounter++;
        nextQuestionBtn.disabled = false;
        numCorrectAnswers.textContent = `Correct answers: ${correctCounter}`;
      } else {
        nextQuestionBtn.disabled = false;
        answerBtn.style.backgroundColor = "red";
        for (const ansBtn of answerBtns) {
          if (ansBtn.textContent === correctAnswer) {
            ansBtn.style.backgroundColor = "green";
          }
        }
      }
    });
  }
};

const addListenersNext = () => {
  addListeners();
  returnHomeBtn();
  
  const answerBtns = document.querySelectorAll(".questionAnswer");

  actualQuestionIndex = quizQuestions.findIndex(
    (item) => item.id === actualQuestionId
  );

  const showResultBtn = document.querySelector("#quizResult");
  const closeResultBtn = document.querySelector("#closeResultModal");
  const modalWindow = document.querySelector("#modalWindow");
  const nextQuestionBtn = document.querySelector("#nextQuestion");

  nextQuestionBtn.addEventListener("click", () => {
    for (const answerBtn of answerBtns) {
      answerBtn.disabled = false;
    }
    actualQuestionIndex++;

    if (actualQuestionIndex === quizQuestions.length - 1) {
      nextQuestionBtn.disabled = true;
      nextQuestionBtn.style.display = "none";
      showResultBtn.style.display = "flex";
    } else {
      nextQuestionBtn.disabled = false;
    }

    printQuiz(quizQuestions, actualQuestionIndex);
    addListeners();
  });

  showResultBtn.addEventListener("click", () => {
    const trainerLevel = document.querySelector("#trainerLevel");
    const trainerLevelImg = document.querySelector("#trainerLevelImg");
    quizMasterLevel(trainerLevel, trainerLevelImg, correctCounter);
    modalWindow.style.display = "flex";
  });

  closeResultBtn.addEventListener("click", () => {
    modalWindow.style.display = "none";
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  printQuiz(quizQuestions, 0);
  addListenersNext(quizQuestions);

};
