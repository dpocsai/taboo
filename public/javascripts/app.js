const changeTime = (time) => {
  document.querySelector("#time").value = time;
};
const changeTeams = (teams) => {
  document.querySelector("#teams").value = teams;
};
const changeRounds = (rounds) => {
  document.querySelector("#rounds").value = rounds;
};

const disableTextInput = (value) => {
  let text3 = document.querySelector("#textInput3");
  let text4 = document.querySelector("#textInput4");
  if (value === "2") {
    text3.classList.add("disabledTextInput");
    text3.disabled = true;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (value === "3") {
    text3.classList.remove("disabledTextInput");
    text3.disabled = false;

    text4.classList.add("disabledTextInput");
    text4.disabled = true;
  }
  if (value === "4") {
    text4.classList.remove("disabledTextInput");
    text4.disabled = false;
  }
};
