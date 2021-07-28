// Variables
const rock = document.getElementById('player-section').firstElementChild,
    paper = rock.nextElementSibling,
    scissors = paper.nextElementSibling,
    comPlayer = document.getElementById('CPU-section').firstElementChild,
    comChoice = [rock.src, paper.src, scissors.src],
    reloadGame = document.getElementById('reload').addEventListener('click', () => location.reload());
let wins = 0,
    losses = 0,
    ties = 0,
    round = 1;

//First Round Text
document.getElementById('round').innerText = 'Round ' + round++;
document.getElementById('status').innerText = 'Pick a hand.';

//Event Listeners
rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);

//Functions
function rockChoice() {
    let rand = comChoice[Math.floor(Math.random() * comChoice.length)];
    comPlayer.src = rand;
    paper.style.display = 'none';
    scissors.style.display = 'none';
    if (comPlayer.src == rock.src) {
        rock.parentElement.setAttribute('id', 'tie');
        comPlayer.parentElement.setAttribute('id', 'tie');
        document.getElementById('status').innerText = 'It\'s a Tie!';
        ties++;
    } else if (comPlayer.src == paper.src) {
        rock.parentElement.setAttribute('id', 'lose');
        comPlayer.parentElement.setAttribute('id', 'win');
        document.getElementById('status').innerText = 'Sorry, You Lost.';
        losses++;
    } else {
        rock.parentElement.setAttribute('id', 'win');
        comPlayer.parentElement.setAttribute('id', 'lose');
        document.getElementById('status').innerText = 'You Won!';
        wins++;
    }
    newRound();
}

function paperChoice() {
    let rand = comChoice[Math.floor(Math.random() * comChoice.length)];
    comPlayer.src = rand;
    rock.style.display = 'none';
    scissors.style.display = 'none';
    if (comPlayer.src == paper.src) {
        rock.parentElement.setAttribute('id', 'tie');
        comPlayer.parentElement.setAttribute('id', 'tie');
        document.getElementById('status').innerText = 'It\'s a Tie!';
        ties++;
    } else if (comPlayer.src == scissors.src) {
        rock.parentElement.setAttribute('id', 'lose');
        comPlayer.parentElement.setAttribute('id', 'win');
        document.getElementById('status').innerText = 'Sorry, You Lost.';
        losses++;
    } else {
        rock.parentElement.setAttribute('id', 'win');
        comPlayer.parentElement.setAttribute('id', 'lose');
        document.getElementById('status').innerText = 'You Won!';
        wins++;
    }
    newRound();
}

function scissorsChoice() {
    let rand = comChoice[Math.floor(Math.random() * comChoice.length)];
    comPlayer.src = rand;
    paper.style.display = 'none';
    rock.style.display = 'none';
    if (comPlayer.src == scissors.src) {
        rock.parentElement.setAttribute('id', 'tie');
        comPlayer.parentElement.setAttribute('id', 'tie');
        document.getElementById('status').innerText = 'It\'s a Tie!';
        ties++;
    } else if (comPlayer.src == rock.src) {
        rock.parentElement.setAttribute('id', 'lose');
        comPlayer.parentElement.setAttribute('id', 'win');
        document.getElementById('status').innerText = 'Sorry, You Lost.';
        losses++;
    } else {
        rock.parentElement.setAttribute('id', 'win');
        comPlayer.parentElement.setAttribute('id', 'lose');
        document.getElementById('status').innerText = 'You Won!';
        wins++;
    }
    newRound();
}

function newRound() {
    setTimeout(() => {
        document.getElementById('round').innerText = 'Round ' + round++;
        document.getElementById('status').innerText = 'Wins: ' + wins + ' Losses: ' + losses + ' Ties: ' + ties;
        rock.parentElement.setAttribute('id', 'player-section');
        comPlayer.parentElement.setAttribute('id', 'CPU-section');
        paper.style.display = 'inline';
        rock.style.display = 'inline';
        scissors.style.display = 'inline';
        comPlayer.src = rock.src;
    }, 1000);
}