    const counter = document.querySelector('.counter');
    const userSelection = document.querySelector('.userSelection');
    const computerSelection = document.querySelector('.computerSelection');
    const choice = document.querySelectorAll(".choice");
    const text = document.querySelector('#text');
    const popup = document.getElementById("popup");
    const restart = document.getElementById("restart");

    let playerWin = 0;
    let computerWin = 0;
    counter.textContent = playerWin + ' : ' + computerWin;

    /* Choose random number between 1-3 and setting value assigned to that number */
    function computerPlay(){
        let play = Math.floor(Math.random() * 3) + 1;
        switch(play){
            case 1: 
                computerSelection.src = "img/rock.png";
                computerSelection.id = "rock";
                break;
            case 2: 
                computerSelection.src = "img/paper.png"; 
                computerSelection.id = "paper";
                break;
            case 3: 
                computerSelection.src = "img/scissors.png"; 
                computerSelection.id = "scissors";
                break;
        }

    }

    /* Compare winning and Tie requirenments*/
    function playRound(playerSelection)
    {
        computerPlay();
        if(playerSelection === 'rock' && computerSelection.id === "scissors" ||
        playerSelection === 'scissors' && computerSelection.id === 'paper' || 
        playerSelection === 'paper' && computerSelection.id === 'rock')
        {
            playerWin++;
        }
        else if(playerSelection != computerSelection.id)
            computerWin++;
    }

    /* Checking users input and logging the game */
    function game(play)
    {
        userSelection.src = play.src;
;       playRound(play.id, computerSelection);
        counter.textContent = playerWin + ' : ' + computerWin;
        if(playerWin === 5)
        {
            popup.classList.add("show");
            text.textContent = "Congratulation! You scored five victories first!";
            restart.addEventListener('click', () => resetGame());
        }
        if(computerWin === 5)
        {
            popup.classList.add("show");
            text.textContent = "Game over! Computer scored five victories first!";
            restart.addEventListener('click', () => resetGame());
        }
    }
    
    /* Reseting parameters*/
    function resetGame()
    {
        popup.classList.remove("show");
        computerSelection.src = 'img/blank.png';
        userSelection.src = 'img/blank.png';
        playerWin = 0;
        computerWin = 0;
        counter.textContent = playerWin + ' : ' + computerWin;
    }

    choice.forEach(a => a.addEventListener('click', () => {
        if(playerWin != 5 && computerWin != 5)
            game(a)
        else
            removeEventListener('click', a);}));