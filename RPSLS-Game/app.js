const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });


        var choices = ["rock", "paper", "scissors", "lizard", "spock"];

        // //Computer random option
        // var shuffled = choices.sort(function() {
        //     return .5 - Math.random()
        // });
        // var computerOptions = shuffled.slice(0, 3);
        // console.log(computerOptions);

        // //player random option
        // var shuffled1 = choices.sort(function() {
        //     return .5 - Math.random()
        // });
        // var playeroptions = shuffled1.slice(0, 3);
        // console.log(playeroptions)

        options.forEach(option => {
            option.addEventListener("click", function() {

                //Computer random option
                var shuffled = choices.sort(function() {
                    return .5 - Math.random()
                });
                var computerOptions = shuffled.slice(0, 3);
                console.log(computerOptions);

                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 1);
                const computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);

                //player random option
                var shuffled1 = choices.sort(function() {
                    return .5 - Math.random()
                });
                var playeroptions = shuffled1.slice(0, 3);
                console.log(playeroptions)

                //player choice
                const playerChoice = document.querySelector(".x");




                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(playerChoice, computerChoice);
                    //Update Images
                    playerHand.src = `./assests/${playerChoice}.png`;
                    computerHand.src = `./assests/${computerChoice}.png`;
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "lizard") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "spock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "spock") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;

            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "lizard") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "spock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;

            }
        }
        //check for lizard
        if (playerChoice === "lizard") {
            if (computerChoice === "paper") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "spock") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //check for spock
        if (playerChoice === "spock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "rock") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else if (computerChoice === "lizard") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

    }
    startGame();
    playMatch();

};
game();