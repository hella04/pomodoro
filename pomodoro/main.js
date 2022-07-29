let session_seconds = 0;
let session_minutes = 25;

let isTicking = false;

// let beep = new Audio("beep.mp3");

let minutes_interval;
let seconds_interval;

const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const mainButton = document.getElementById("main");

function template() {
  minutesElement.innerHTML = session_minutes;
  secondsElement.innerHTML = session_seconds;

  if (!seconds_interval) {
    mainButton.textContent = "start";
    mainButton.classList.remove("active");
  } else {
    mainButton.textContent = "stop";
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

const timer = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 25,
};
