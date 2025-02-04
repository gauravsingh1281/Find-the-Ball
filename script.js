const showAttempt = document.getElementById("attempt-left");
const showScore = document.getElementById("score");
const boxes = document.querySelectorAll(".box");
let ballPosition = Math.floor(Math.random() * 6) + 1;
let attemptLeft = 10;
let score = 0;

boxes.forEach((e) => {
  e.addEventListener("click", function () {
    let selectedBox = this.textContent;
    let selectedBoxId = this.getAttribute("id");
    findBall(selectedBox, selectedBoxId);
  });
});

const findBall = (boxValue, boxId) => {
  if (boxValue == ballPosition) {
    score += 1;
    attemptLeft -= 1;
    showAttempt.textContent = attemptLeft;
    showScore.textContent = score;
    document.querySelector(`#${boxId} #ball-found`).classList.add("show-ball");
  } else {
    attemptLeft -= 1;
    showAttempt.textContent = attemptLeft;
  }
};

const playAgain = () => {
  ballPosition = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll(".box .ball").forEach((ball) => {
    ball.classList.remove("show-ball");
  });
};
