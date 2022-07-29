
var session_seconds= "00";
var session_minutes= 25;

var beep = new Audio("beep.mp3");

function template() {
    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;
  }



function start_timer() {

    session_minutes = 24;
    session_seconds = 59; 

    document.getElementById("minutes").innerHTML = session_minutes;
    document.getElementById("seconds").innerHTML = session_seconds;

    var minutes_interval = setInterval(minutesTimer, 60000);
    var seconds_interval = setInterval(secondsTimer, 1000);


    function minutesTimer() {
        session_minutes = session_minutes -1;
        document.getElementById("minutes").innerHTML = session_minutes;
    }

    function secondsTimer() {
        session_seconds = session_seconds -1;
        document.getElementById("seconds").innerHTML = session_seconds;
    


      if( session_seconds <=0){
          if( session_minutes <=0){
              clearInterval(minutes_interval);
              clearInterval(seconds_interval);

              beep.play();
           }
           session_seconds = 60;
       }
    }
}
function stopTimer() {
    clearInterval(interval);
  
    mainButton.dataset.action = 'start';
    mainButton.textContent = 'start';
    mainButton.classList.remove('active');
  }



const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 25,
  };
