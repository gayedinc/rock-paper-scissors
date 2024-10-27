const choiceList = ["Taş", "Kağıt", "Makas"];

function getComputerChoice() {
  return choiceList.at(Math.floor(Math.random() * 3));
};

rock.addEventListener('click', handleRockBtn);
paper.addEventListener('click', handlePaperBtn);
scissors.addEventListener('click', handleScissorsBtn);

// function play() {
//   const hamle = this.innerText.toLocaleLowerCase('tr');
//   userChoice.innerText = hamle;
//   const computerChoiceValue = getComputerChoice();
//   computerChoice.innerText = computerChoiceValue;
//   computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
//   winnerBtnTxt.innerHTML = "";

//   if (hamle === computerChoiceValue) {
//     winnerBtn.innerText = 'Berabere';
//   } else if (hamle === 'taş' && computerChoiceValue === 'makas') {
//     winnerBtn.innerText = ' Oyuncu';
//     userScore++;
//     userScoreTxt.innerText = userScore;
//   } else if (hamle === 'makas' && computerChoiceValue === 'kağıt') {
//     winnerBtn.innerText = ' Oyuncu';
//     userScore++;
//     userScoreTxt.innerText = userScore;
//   } else if (hamle === 'kağıt' && computerChoiceValue === 'taş') {
//     winnerBtn.innerText = ' Oyuncu';
//     userScore++;
//     userScoreTxt.innerText = userScore;
//   } else {
//     winnerBtn.innerText = ' Bilgisayar';
//     computerScore++;
//     computerScoreTxt.innerText = computerScore;
//   }
// }

function handleRockBtn() {
  const computerChoiceValue = getComputerChoice();
  computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
  winnerBtnTxt.innerHTML = "";
  if (computerChoiceValue === "Kağıt") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    winnerBtnTxt.innerHTML += 'Bilgisayar';
  } else if (computerChoiceValue === "Makas") {
    userScore++;
    userScoreTxt.innerText = userScore;
    winnerBtnTxt.innerHTML += 'Oyuncu';
  } else if (computerChoiceValue === "Taş") {
    winnerBtnTxt.innerHTML = "Yok";
  }

}

function handlePaperBtn() {
  const computerChoiceValue = getComputerChoice();
  computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
  winnerBtnTxt.innerHTML = "";
  if (computerChoiceValue === "Makas") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    winnerBtnTxt.innerHTML += 'Bilgisayar';
  } else if (computerChoiceValue === "Taş") {
    userScore++;
    userScoreTxt.innerText = userScore;
    winnerBtnTxt.innerHTML += 'Oyuncu';
  } else if (computerChoiceValue === "Kağıt") {
    winnerBtnTxt.innerHTML = "Yok";
  }
}

function handleScissorsBtn() {
  const computerChoiceValue = getComputerChoice();
  computerChoice.innerHTML = `<button>${computerChoiceValue}</button>`;
  winnerBtnTxt.innerHTML = "";

  if (computerChoiceValue === "Taş") {
    computerScore++;
    computerScoreTxt.innerText = computerScore;
    winnerBtnTxt.innerHTML += 'Bilgisayar';
  } else if (computerChoiceValue === "Kağıt") {
    userScore++;
    userScoreTxt.innerText = userScore;
    winnerBtnTxt.innerHTML += 'Oyuncu';
  } else if (computerChoiceValue === "Makas") {
    winnerBtnTxt.innerHTML = "Yok";
  }
}

let userScore = 0;
let computerScore = 0;

clearBtn.addEventListener("click", handleClearBtn);
function handleClearBtn() {
  userScoreTxt.innerText = 0;
  computerScoreTxt.innerText = 0;
  winnerBtnTxt.innerHTML = "";
  computerChoice.innerHTML = "";
  userScore = 0;
  computerScore = 0;
}