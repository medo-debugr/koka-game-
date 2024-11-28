let score1 = 0;
let score2 = 0;
const maxScore = 20; // النقاط المطلوبة للفوز

const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const winnerDisplay = document.getElementById("winner");
const resetButton = document.getElementById("reset");

// تحديث النقاط عند الضغط على الأزرار
function incrementScore(player) {
  if (score1 < maxScore && score2 < maxScore) {
    if (player === 1) {
      score1++;
      score1Display.textContent = score1;
    } else if (player === 2) {
      score2++;
      score2Display.textContent = score2;
    }
    checkWinner();
  }
}

// التحقق من الفائز
function checkWinner() {
  if (score1 === maxScore) {
    winnerDisplay.textContent = "🎉 اللاعب 1 هو الفائز! 🎉";
    winnerDisplay.classList.remove("hidden");
    disableButtons();
  } else if (score2 === maxScore) {
    winnerDisplay.textContent = "🎉 اللاعب 2 هو الفائز! 🎉";
    winnerDisplay.classList.remove("hidden");
    disableButtons();
  }
}

// تعطيل الأزرار بعد الفوز
function disableButtons() {
  btn1.disabled = true;
  btn2.disabled = true;
}

// إعادة تشغيل اللعبة
function resetGame() {
  score1 = 0;
  score2 = 0;
  score1Display.textContent = score1;
  score2Display.textContent = score2;
  winnerDisplay.textContent = "";
  winnerDisplay.classList.add("hidden");
  btn1.disabled = false;
  btn2.disabled = false;
}

// إضافة الأحداث للأزرار
btn1.addEventListener("click", () => incrementScore(1));
btn1.addEventListener("touchstart", (e) => {
  e.preventDefault(); // منع التأثير الافتراضي للمس
  incrementScore(1);
});

btn2.addEventListener("click", () => incrementScore(2));
btn2.addEventListener("touchstart", (e) => {
  e.preventDefault();
  incrementScore(2);
});

resetButton.addEventListener("click", resetGame);