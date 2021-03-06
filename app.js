//Connecting DOM Elements to variables
const hrs = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const millisecs = document.querySelector('.millisecs');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const pauseButton = document.querySelector('#pause');

//Defining milliseconds, seconds, minutes, and hours
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variable to hold the interval
let interval = null;

//A function to display the value
function countTime() {
    milliseconds++;
    if (milliseconds < 10) {
        millisecs.innerHTML = '0' + milliseconds;
    } else {
        millisecs.innerHTML = milliseconds;
    }

    if (milliseconds === 99) {
        milliseconds = 0;
        seconds++;
        if (seconds < 10) {
            secs.innerHTML = '0' + seconds;
        } else {
            secs.innerHTML = seconds;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes < 10) {
                mins.innerHTML = '0' + minutes;
            } else {
                mins.innerHTML = minutes;
            }

            if (minutes === 60) {
                minutes = 0;
                hours++;
                if (hours < 10) {
                    hrs.innerHTML = '0' + hours;
                } else {
                    hrs.innerHTML = hours;
                }
            }
        }
    }
}

//A function to start the stopwatch
function start() {
    interval = window.setInterval(countTime, 1);
}

//A function to pause the stopwatch
function pause() {
    window.clearInterval(interval);
}

//A function to reset the stopwatch
function reset() {
    window.clearInterval(interval);
    hrs.innerHTML = '00';
    mins.innerHTML = '00';
    secs.innerHTML = '00';
    millisecs.innerHTML = '00'
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
}

//The start button
startButton.addEventListener('click', button => {
    startButton.hidden = true;
    pauseButton.hidden = false;
    resetButton.hidden = false;
    start();
});

//The pause button
pauseButton.addEventListener('click', button => {
    startButton.hidden = false;
    pauseButton.hidden = true;
    pause();
});

//The reset button
resetButton.addEventListener('click', button => {
    startButton.hidden = false;
    pauseButton.hidden = true;
    resetButton.hidden = true;
    reset();
});
