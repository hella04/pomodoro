const startButton = document.getElementById('main');
const timeLabel = document.getElementById('time-label');
const resetButton = document.getElementById('resbutton');
const breakButton = document.getElementById('shortbreak');



let timerIntervalKey;
const defaultRemainingTime = 4;

let isRunning = false;
let remainingTime = defaultRemainingTime;
const shortBreakTime = 2;

function timerTick() {
    console.log('this is a timer tick')
    remainingTime-- //remainingTime= remainingTime-1
    timeLabel.innerHTML = remainingTime
    if (remainingTime === 0) {
        console.log('should change to short break')
        isRunning = true
        remainingTime = shortBreakTime
        timeLabel.innerHTML = remainingTime
        
   
    }
    if (remainingTime === 0) {
        console.log('should stop')
        clearInterval(timerIntervalKey)
        startButton.innerHTML = 'Start'
        isRunning = false
        remainingTime = defaultRemainingTime
        timeLabel.innerHTML = remainingTime
    }

}

function startClick() {
    if (!isRunning) {
        console.log('clicka')
        timerIntervalKey = setInterval(timerTick, 1000)
        isRunning = true
        startButton.innerHTML = 'Pause'

    } else {
        clearInterval(timerIntervalKey)
        isRunning = false
        startButton.innerHTML = 'Start'

    }

}

function documentLoaded() {
    console.log('the document has loaded')
    timeLabel.innerHTML = remainingTime
}


startButton.addEventListener('click', startClick);


document.addEventListener('DOMContentLoaded', documentLoaded);


function resetClick() {
    remainingTime = defaultRemainingTime
    timeLabel.innerHTML = remainingTime

}
resetButton.addEventListener('click', resetClick);

function shortBreakClick() {
    remainingTime = shortBreakTime
    timeLabel.innerHTML = remainingTime



}
breakButton.addEventListener('click', shortBreakClick);