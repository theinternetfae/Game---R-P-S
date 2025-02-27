//PLAYER BUTTONS
const stone = document.getElementById('rock');
const  tissue = document.getElementById('paper');
const cutter = document.getElementById('scissors');

//MOVE TEXT
const wordOne = document.getElementById('word1');

//COUNTER
let winCount = 0;
let tieCount = 0;
let loseCount = 0;

const winText = document.querySelector('.win-count');
const tieText = document.querySelector('.tie-count');
const loseText = document.querySelector('.lose-count');

//RESET
const reset = document.getElementById('reset');



function computerMove() {
    let cMove = '';
    let random = Math.random() * 3;

    if (random >= 0 && random < 1 / 3) {
        cMove = 'Rock';
    } else if (random >= 1 / 3 && random < 2 / 3) {
        cMove = 'Paper';
    } else if (random >= 2 / 3) {
        cMove = 'Scissors';
    }

    return cMove;
}

function playerMove(pMove) {
    const cMove = computerMove();
    let result = '';

    if (pMove === 'Rock') {
        if (cMove == 'Paper') {
            result = 'You lose';
            loseCount++;
            loseText.innerText = loseCount;
            console.log(cMove);
        } else if (cMove == 'Scissors') {
            result = 'You win';
            winCount++;
            winText.innerText = winCount;
            console.log(cMove);
        } else {
            result = 'Its a tie';
            tieCount++;
            tieText.innerHTML = tieCount;
            console.log(cMove);
        }
    } else if (pMove === 'Paper') {
        if (cMove == 'Paper') {
            result = 'Its a tie';
            tieCount++;
            tieText.innerText = tieCount;
            console.log(cMove);
        } else if (cMove == 'Scissors') {
            result = 'You lose';
            loseCount++;
            loseText.innerText = loseCount;
            console.log(cMove);
        } else {
            result = 'You win';
            winCount++;
            winText.innerText = winCount;
            console.log(cMove);
        }
    } else {
        if (cMove == 'Paper') {
            result = 'You win';
            winCount++;
            winText.innerText = winCount;
            console.log(cMove);
        } else if (cMove == 'Scissors') {
            result = 'Its a tie';
            tieCount++;
            tieText.innerText = tieCount;
            console.log (cMove);
        } else {
            result = 'You lose';
            loseCount++;
            loseText.innerHTML = loseCount;
            console.log(cMove);
        }
    }

    wordOne.innerText = `You played ${pMove}. The computer played ${cMove}. ${result}.`;
    setTimeout(() => { 
        wordOne.innerText = '';
    }, 3000);
};

stone.addEventListener('click', () => {    
    playerMove('Rock');
})

tissue.addEventListener('click', () => {
    playerMove('Paper');
})

cutter.addEventListener('click', () => {
    playerMove('Scissors');
})

reset.onclick = resetGame;

function resetGame() {
    winCount = 0;
    loseCount = 0;
    tieCount = 0;

    winText.innerText = winCount;
    loseText.innerText = loseCount;
    tieText.innerText = tieCount;
};