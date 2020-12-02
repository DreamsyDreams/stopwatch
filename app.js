//Connecting DOM Elements to variables
const hrs = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const pauseButton = document.querySelector('#pause');

//Defining seconds, minutes, and hours
let seconds = 0;
let minutes = 0;
let hours = 0;

//A function to display the value
function countTime() {
    seconds++;
    if (seconds < 10) {
        secs.innerHTML = '0' + seconds.toString();
    } else {
        secs.innerHTML = seconds;
    }

    //Checking if a minute passed
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        mins.innerHTML = minutes

        //Checking if an hour passed
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
            hrs.innerHTML = hours
        }
    }
}

startButton.addEventListener('click', button => {
    startButton.hidden = true;
    pauseButton.hidden = false;
    restartButton.hidden = false;
    window.setInterval(countTime, 1000);
});
