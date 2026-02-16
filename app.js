////// import elements :

const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
const resetBtn = document.querySelector(".reset");
let score0 = document.querySelector(".score-0");
let score1 = document.querySelector(".score-1");
let diceImg = document.querySelector("img");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");

////// start conditions :

let score, activePlayer, totalScores, isPlaying;

function newGame() {
  score0.textContent = 0;
  score1.textContent = 0;
  diceImg.classList.add("hidden");
  isPlaying = true;
  score = 0;
  activePlayer = 0;
  totalScores = [0, 0];
  player0.classList.add("active");
  player1.classList.remove("active");
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  document.querySelector(".current-score-0").textContent = 0;
  document.querySelector(".current-score-1").textContent = 0;
}

newGame() ;
const switchPlayer = function () {
  score = 0;
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0; /// u.u.i
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

//////// roll functionnality :::

rollBtn.addEventListener("click", function () {
  if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1; ///// 1====> 6
    diceImg.src = `dice-${diceNumber}.png`;
    diceImg.classList.remove("hidden"); ///// u.u.i

    if (diceNumber !== 1) {
      //    score = score + diceNumber
      score += diceNumber;
      document.querySelector(`.current-score-${activePlayer}`).textContent =
        score; /// u.u.i
    } else {
      switchPlayer();
    }
  }
});

///// const totalScores = [0,0]    ///  totalScores[0] =  totalScores[0] + 15  ///// 0 = 0 + 15

////// hold functionnality ::

holdBtn.addEventListener("click", function () {
  if (isPlaying) {
    totalScores[activePlayer] += score;
    document.querySelector(`.score-${activePlayer}`).textContent =
      totalScores[activePlayer]; ///// u.u.i
    if (totalScores[activePlayer] >= 20) {
      isPlaying = false;
      document.querySelector(`.player-${activePlayer}`).classList.add("winner");
    } else {
      switchPlayer();
    }
  }
});

////// reset functionnality :::

resetBtn.addEventListener("click" , newGame);
