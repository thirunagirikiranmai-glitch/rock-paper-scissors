function play(playerchoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerchoice === computerchoice) {
    result = `It is a tie between ${playerchoice} and ${computerchoice}`;
  } else if (
    (playerchoice === "rock" && computerchoice === "scissors") ||
    (playerchoice === "paper" && computerchoice === "rock") ||
    (playerchoice === "scissors" && computerchoice === "paper")
  ) {
    result = `You won! ${playerchoice} beats ${computerchoice}`;
  } else {
    result = `You lost! ${computerchoice} beats ${playerchoice}`;
  }

  document.getElementById("result").textContent = result;
}
  
