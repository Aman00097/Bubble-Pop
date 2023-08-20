let timer = 9;
let score = 0;
let hitVal = 0;

function makeBubble() {
    let clutter = '';

    for (let i = 1; i <= 200; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNum}</div>`;
    }

    document.querySelector('.pbtm').innerHTML = clutter;
}

function timerCount() {
    let timerInterval = setInterval(() => {
        if (timer >= 0) {
            document.querySelector('#timerVal').textContent = timer--; //innerText or innerHtml or textContent
        } else {
            clearInterval(timerInterval);
            document.querySelector('.pbtm').innerHTML = `<div class='showOver'><h1>Game Over</h1>
            <button type='button' class='btn' onclick='newGame()'>Start</button></div>`;
        }
    }, 1000);
}

function getNewHitVal() {
    hitVal = Math.floor(Math.random() * 10);
    document.querySelector('#hitVal').textContent = hitVal;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function newGame() {
    score = 0;
    document.querySelector('#scoreVal').textContent = score;
    timer = 9;
    document.querySelector('#timerVal').textContent = 10;
    timerCount();
    getNewHitVal();
    makeBubble();
}


document.querySelector('.pbtm').addEventListener('click', (e) => {
    let clickedNum = Number(e.target.textContent);
    if (clickedNum === hitVal) {
        increaseScore();
        getNewHitVal();
        makeBubble();
        timer = 10;
    }
});

getNewHitVal();
timerCount();
makeBubble();