// score
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerPoints = 0;
let computerPoints = 0;
playerScore.innerHTML = playerPoints;
computerScore.innerHTML = computerPoints;
// clicked images
const imgs = document.querySelectorAll(".select img");
const showPlayerChoice = document.querySelector(".showPlayer img");
const showComputerChoice = document.querySelector(".showComputer img");

// images
const rockImg = "imgs/rock.png";
const paperImg = "imgs/paper.png";
const scissorImg = "imgs/scissors.png";
const randomSrc = [rockImg, paperImg, scissorImg];

function game() {
  imgs.forEach((img) => {
    img.addEventListener("click", function (e) {
      // Player choice
      const playerChoice = e.target.getAttribute("data-choice");
      showPlayerChoice.src = e.target.src;

      const randomNum = Math.floor(Math.random() * randomSrc.length);

      // Computer choice
      const computerChoice = randomSrc[randomNum];
      showComputerChoice.src = computerChoice;

      // Determine winner
      if (
        (playerChoice === "rock" && computerChoice === scissorImg) ||
        (playerChoice === "paper" && computerChoice === rockImg) ||
        (playerChoice === "scissors" && computerChoice === paperImg)
      ) {
        playerPoints++;
        playerScore.textContent = playerPoints;
        alert("You Win!");
      } else if (
        (playerChoice === "rock" && computerChoice === paperImg) ||
        (playerChoice === "paper" && computerChoice === scissorImg) ||
        (playerChoice === "scissors" && computerChoice === rockImg)
      ) {
        computerPoints++;
        computerScore.textContent = computerPoints;
        alert("Computer Wins!");
      } else {
        alert("It's a Draw!");
      }
    });
  });
}

game();
