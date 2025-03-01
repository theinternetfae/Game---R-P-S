//PLAYER BUTTONS
const stone = document.getElementById('rock');
const  tissue = document.getElementById('paper');
const cutter = document.getElementById('scissors');

//COUNTER

const counter = JSON.parse(localStorage.getItem('counter'))

console.log(counter);

//RESET
const reset = document.getElementById('reset');

function computerMove() {
    let cMove = '';
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        cMove = 'Rock';
    } else if (random === 1) {
        cMove = 'Paper';
    } else if (random === 2) {
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
        } else if (cMove == 'Scissors') {
            result = 'You win';
        } else {
            result = 'Its a tie';
        }
    } else if (pMove === 'Paper') {
        if (cMove == 'Paper') {
            result = 'Its a tie';
        } else if (cMove == 'Scissors') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    } else {
        if (cMove == 'Paper') {
            result = 'You win';
        } else if (cMove == 'Scissors') {
            result = 'Its a tie';
        } else {
            result = 'You lose';
        }
    }

    if (result === 'You win') {
        counter.win++;
    } else if (result === 'You lose') {
        counter.lose++;
    } else {
        counter.tie++;
    }

    localStorage.setItem('counter', JSON.stringify(counter));

    console.log(cMove);
    alert(`You played ${pMove}. The computer played ${cMove}. ${result}.
Wins: ${counter.win}, Losses: ${counter.lose}, Tie: ${counter.tie}`);
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
    counter.win = 0;
    counter.lose = 0;
    counter.tie = 0; 
};