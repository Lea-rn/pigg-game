////// import elements :

const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
let score0 = document.querySelector(".score-0");
let score1 = document.querySelector(".score-1");
let diceImg = document.querySelector("img");
let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");

////// start conditions :

score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add("hidden");

let score = 0;
let activePlayer = 0;

let totalScores = [0, 0];

const switchPlayer = function () {
  score = 0;
  document.querySelector(`.current-score-${activePlayer}`).textContent = 0; /// u.u.i
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

//////// roll functionnality :::

rollBtn.addEventListener("click", function () {
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
});

///// const totalScores = [0,0]    ///  totalScores[0] =  totalScores[0] + 15  ///// 0 = 0 + 15

////// hold functionnality ::

holdBtn.addEventListener("click", function () {
  //   totalScores[activePlayer] = totalScores[activePlayer] + score ;
  totalScores[activePlayer] += score;
  document.querySelector(`.score-${activePlayer}`).textContent =
    totalScores[activePlayer]; ///// u.u.i
  if (totalScores[activePlayer] >= 20) {
    document.querySelector(`.player-${activePlayer}`).classList.add("winner");
  } else {
    switchPlayer();
  }
});
