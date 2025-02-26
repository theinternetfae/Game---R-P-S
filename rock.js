
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




let computerMove = '';

stone.addEventListener('click', () => {
    const number = Math.random();
    wordOne.style.display = 'block';
    let move = 'You play rock.'

    if (number >= 0 && number < 1 / 3) {
        computerMove = 'The computer plays rock.';
    } else if (number >= 1 / 3 && number < 2 / 3) {
        computerMove = 'The computer plays paper.';
    } else if (number >= 2 / 3) {
        computerMove = 'The computer plays scissors.';
    }
    

    if (computerMove === 'The computer plays rock') {
        wordOne.innerText = `${move} ${computerMove} It's a tie`;
        tieCount++
        tieText.innerText = tieCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    } else if (computerMove === 'The computer plays paper') {
        wordOne.innerText = `${move} ${computerMove} You lose this round.`;
        loseCount++
        loseText.innerText = loseCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    } else {
        wordOne.innerText = `${move} ${computerMove} You win this round.`;
        winCount++
        winText.innerText = winCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    }

})




tissue.addEventListener('click', () => {
    const number = Math.random();
    wordOne.style.display = 'block';
    let move = 'You play paper.'

    if (number >= 0 && number < 1 / 3) {
        computerMove = 'The computer plays rock.';
    } else if (number >= 1 / 3 && number < 2 / 3) {
        computerMove = 'The computer plays paper.';
    } else if (number >= 2 / 3) {
        computerMove = 'The computer plays scissors.';
    }
    

    if (computerMove === 'The computer plays rock') {
        wordOne.innerText = `${move} ${computerMove} You win this round.`;
        winCount++;
        winText.innerText = winCount; 
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    } else if (computerMove === 'The computer plays paper') {
        wordOne.innerText = `${move} ${computerMove} Its a tie.`;
        tieCount++;
        tieText.innerText = tieCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    } else {
        wordOne.innerText = `${move} ${computerMove} You lose this round.`;
        loseCount++;
        loseText.innerText = loseCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    }
})



cutter.addEventListener('click', () => {
    const number = Math.random();
    wordOne.style.display = 'block';
    let move = 'You play scissors.'

    if (number >= 0 && number < 1 / 3) {
        computerMove = 'The computer plays rock.';
    } else if (number >= 1 / 3 && number < 2 / 3) {
        computerMove = 'The computer plays paper.';
    } else if (number >= 2 / 3) {
        computerMove = 'The computer plays scissors.';
    }
    

    if (computerMove === 'The computer plays rock') {
        wordOne.innerText = `${move} ${computerMove} You lose this round.`;
        loseCount++;
        loseText.innerText = loseCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    } else if (computerMove === 'The computer plays paper') {
        wordOne.innerText = `${move} ${computerMove} You win this round.`;
        winCount++;
        winText.innerText = winCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    } else {
        wordOne.innerText = `${move} ${computerMove} Its a tie.`;
        tieCount++;
        tieText.innerText = tieCount;
        setTimeout(() => {
            wordOne.style.display = 'none';
        }, 6000)
    }
})

reset.addEventListener('click', () => {
    winCount = 0;
    tieCount = 0;
    loseCount = 0;

    winText.innerText = winCount;
    tieText.innerText = tieCount;
    loseText.innerText = loseCount;

    setTimeout(() => {
        wordOne.style.display = 'none';
    })
})