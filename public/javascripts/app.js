const correct = document.querySelector("#correct");
const incorrect = document.querySelector("#incorrect");
const points = document.querySelector(".points");
const timeRange = document.querySelector("#time");
const teamsRange = document.querySelector("#teams");
const roundsRange = document.querySelector("#rounds");
const text2 = document.querySelector("#textInput2");
const text3 = document.querySelector("#textInput3");
const text4 = document.querySelector("#textInput4");
const card = document.querySelectorAll(".card li");
const start = document.querySelector(".start");
const teams = document.querySelectorAll(".team li");
const timeDisplay = document.querySelector("#timeDisplay");
const roundsDisplay = document.querySelector("#roundsDisplay");
const teamDisplay = document.querySelectorAll("#teamDisplay li");
const buzzer = document.querySelector(".buzzer");

const words = [
  ["Architect", "Create", "Build", "House", "Blueprint", "Design"],
  ["Mouse", "Cat", "Trap", "Cheese", "Tom & Jerry", "Animal"],
  ["Argument", "Fight", "Anger", "Yell", "Quarrel", "Couple"],
];

//show values for range inputs in settings
const changeTime = (time) => {
  timeRange.value = time;
};
const changeTeams = (teams) => {
  teamsRange.value = teams;
};
const changeRounds = (rounds) => {
  roundsRange.value = rounds;
};

//disable text inputs as user slides teams range input
const disableTextInput = (numTeams) => {
  if (numTeams === "1") {
    text2.classList.add("disabledTextInput");
    text2.disabled = true;

    text3.classList.add("disabledTextInput");
    text3.disabled = true;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (numTeams === "2") {
    text2.classList.remove("disabledTextInput");
    text2.disabled = false;

    text3.classList.add("disabledTextInput");
    text3.disabled = true;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (numTeams === "3") {
    text3.classList.remove("disabledTextInput");
    text3.disabled = false;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (numTeams === "4") {
    text4.classList.remove("disabledTextInput");
    text4.disabled = false;
  }
};
let wordsIdx = 0; //index of the card to show in the words array
//show the next card and increment index to next card in words array
const nextCard = () => {
  card.forEach((word, idx) => {
    word.innerText = words[wordsIdx][idx];
  });
  if (wordsIdx > words.length - 2) {
    //reset deck when complete
    wordsIdx = 0;
  } else {
    wordsIdx++;
  }
};
const blankCard = () => {
  card.forEach((word) => {
    word.innerText = "";
  });
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    buzzer.addEventListener("click", () => {
      console.log("..");
      let audio = new Audio("./stylesheets/foghi.mp3");
      audio.play();
    });
  },
  false
);

//show next card, and change score accordingly
correct.addEventListener("click", () => {
  nextCard();
  points.innerText++;
});
incorrect.addEventListener("click", () => {
  nextCard();
  points.innerText--;
});

const startTime = timeDisplay.innerText;
let teamIdx = 0;
let round = 1;
teams[teamIdx].classList.add("currentTeam");

const nextTeam = () => {
  teams[teamIdx].classList.remove("currentTeam");
  if (teamIdx >= teams.length - 1) {
    teamIdx = 0;
    nextRound();
  } else {
    teamIdx++;
  }
  teams[teamIdx].classList.add("currentTeam");
};
nextRound = () => {
  let maxRound = +roundsDisplay.innerText.split("/")[1];
  let currentRound = +roundsDisplay.innerText.split("/")[0];
  if (currentRound < maxRound) {
    currentRound++;
    roundsDisplay.innerText = `${currentRound}/${maxRound}`;
  } else {
    computeResults();
    start.innerText = "RESET";
    start.addEventListener("click", () => {
      window.location.href = "/play";
    });
  }
};

const startTimer = () => {
  +timeDisplay.innerText--;
  let timer = setInterval(() => {
    +timeDisplay.innerText--;
    if (+timeDisplay.innerText === 0) {
      stopTimer();
      reset();
    }
  }, 1000);
  const stopTimer = () => {
    clearInterval(timer);
  };
};

start.addEventListener("click", () => {
  points.innerText = 0;
  timeDisplay.innerText = startTime;
  correct.disabled = false;
  incorrect.disabled = false;
  start.classList.add("hidden");
  nextCard();
  startTimer();
});

const reset = () => {
  displayScore();
  correct.disabled = true;
  incorrect.disabled = true;
  start.classList.remove("hidden");
  blankCard();
  nextTeam();
};
let finalScore = {};

displayScore = () => {
  let teamName = teamDisplay[teamIdx].innerText.split(" | ")[0];
  let teamPoints = +teamDisplay[teamIdx].innerText.split(" | ")[1];
  teamPoints += +points.innerText;
  teamDisplay[teamIdx].innerText = `${teamName} | ${teamPoints}`;
  addScore(teamName, +points.innerText);
};
addScore = (team, score) => {
  if (!(team in finalScore)) {
    finalScore[team] = [];
  }
  finalScore[team].push(score);
  console.log(finalScore);
};
let computeResults = () => {
  let winner;
  let winningScore = 0;
  let arr = [];
  for (team in finalScore) {
    let scoreTotal = finalScore[team].reduce((a, b) => a + b, 0);

    arr.push([team, finalScore[team], scoreTotal]);
  }
  arr.sort((a, b) => b[2] - a[2]);
  displayResults(arr);
};

const displayResults = (results) => {
  if (results[1] === undefined) {
    card[0].innerText = `${results[0][2]} points`;
  } else if (results[0][2] === results[1][2]) {
    card[0].innerText = `Tie!`;
    results.forEach((team, idx) => {
      card[idx + 2].innerText = `${team[0]} | ${team[2]}`;
    });
  } else {
    card[0].innerText = `${results[0][0]} wins!`;
    results.forEach((team, idx) => {
      card[idx + 2].innerText = `${team[0]} | ${team[2]}`;
    });
  }
  card.forEach((line, idx) => {
    if (idx !== 0) {
      line.classList.add("right");
    }
  });
};

window.onbeforeunload = function () {
  return "Leave?";
};
