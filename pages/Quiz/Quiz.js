import "./Quiz.css";
import { quizQuestions } from "../../data/quizQA";
import { returnBtn } from "../../components/returnBtn/returnBtn";
import { addListener as returnHomeBtn } from "../../components/returnBtn/returnBtn";
const username = localStorage.getItem("user");
const avatar = localStorage.getItem("icon");
let actualQuestionIndex = 0;
let actualQuestionId = "";
let selectedAnswer = "";
let correctAnswer = "";
let correctCounter = 0;
const template = () => `
<section class="quizGame">
    ${returnBtn()}
    <h1>Pokemon Quiz</h1>
    <h2>Are you a qualified Pokemon trainer?</h2>

    <div class="playerProfile" id="playerProfile">
        <img src=${avatar} alt="player avatar"/>
        <h4>${username}</h4>
        <p id="numCorrectAnswers">Correct answers: ${correctCounter}</p>
    </div>

    <section class="quizContainer" id="quizContainer"></section>
    <button class="nextQuestion" id="nextQuestion">Next question</button>
</section>

`;

const printQuiz = (quizQuestions, i) => {
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

const addListeners = (quizQuestions) => {
  returnHomeBtn();

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
        numCorrectAnswers.textContent = `Correct answers: ${correctCounter}`;
      } else {
        answerBtn.style.backgroundColor = "red";
        for (const ansBtn of answerBtns) {
          if (ansBtn.textContent === correctAnswer) {
            ansBtn.style.backgroundColor = "green";
          }
        }
      }
    });
  }

  actualQuestionIndex = quizQuestions.findIndex(
    (item) => item.id === actualQuestionId
  );
  const nextQuestionBtn = document.querySelector("#nextQuestion");
  nextQuestionBtn.addEventListener("click", () => {
    for (const answerBtn of answerBtns) {
      answerBtn.disabled = false;
    }
    actualQuestionIndex++;
    actualQuestionIndex === 6
      ? (nextQuestionBtn.disabled = true)
      : (nextQuestionBtn.disabled = false);
    printQuiz(quizQuestions, actualQuestionIndex);
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  printQuiz(quizQuestions, 0);
  addListeners(quizQuestions);
};
