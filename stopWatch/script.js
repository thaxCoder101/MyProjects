const timerEl = document.getElementById('timer');
const startButtonEL = document.getElementById("start");
const stopButtonEL = document.getElementById("stop");
const resetButtonEL = document.getElementById("reset");

function startTimer(){
    startTime = Date.now - elapseTime;
    timerInterval = setInterval(()=>{
        elapseTime = Date.now - startTime;
        timerEl.textContent = elapseTime;
    }, 10);
}
function stopTimer(){
    console.log("stop");
}
function resetTimer(){
    console.log("reset");
}

let startTime = 0;
let elapseTime = 0;
let timerInterval;

startButtonEL.addEventListener("click",startTimer);
stopButtonEL.addEventListener("click",stopTimer);
resetButtonEL.addEventListener("click",resetTimer);