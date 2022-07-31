let session_seconds = 0;
let session_minutes = 25;


const container_settings = {
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  sessions: 0,
};

let isTicking = false;

let beep = new Audio("beep.mp3");

let minutes_interval;
let seconds_interval;



const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const mainButton = document.getElementById("main");

function template() {
  minutesElement.innerHTML = session_minutes;
  secondsElement.innerHTML = session_seconds;

  if (!seconds_interval) {
    mainButton.textContent = "Start";
    mainButton.classList.remove("active");
  } else {
    mainButton.textContent = "Stop";
    mainButton.classList.add("active");
  }
}

function clearTimers() {
  clearInterval(minutes_interval);
  clearInterval(seconds_interval);
  minutes_interval = null;
  seconds_interval = null;
}

function start_timer() {
  template();
  if (!seconds_interval) {
    if (session_minutes === 25 && session_seconds === 0) {
      session_minutes = 24;
      session_seconds = 59;
    }

    minutes_interval = setInterval(minutesTimer, 60000);
    seconds_interval = setInterval(secondsTimer, 1000);
  } else {
    stopTimer();
  }

  template();
}

function minutesTimer() {
  session_minutes = session_minutes - 1;

  template();
}

function secondsTimer() {
  session_seconds = session_seconds - 1;

  if (session_seconds <= 0) {
    if (session_minutes <= 0) {
      clearTimers();
      

      beep.play();
    }
    session_seconds = 60;
  }
  
  template();
}

function reset_timer() {
  clearTimers();

  session_minutes = 25;
  session_seconds = 0;

  template();
}

function stopTimer() {
  clearTimers();
  template();
}

function container_shortbreak(){
  addEventListener('click', () => {
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    session_minutes = 5;
    session_seconds = 0;
  });

  template();
}
function container_longbreak(){
  addEventListener('click', () => {
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    session_minutes = 25;
    session_seconds = 0;
  });

  template();
}


function decrease_timer(){
  session_minutes= session_minutes-1;

  template();
}


function increase_timer(){
  session_minutes= session_minutes+1;

  template();
}


