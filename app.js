const hrs = document.querySelector('.hrs');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');
const startButton = document.querySelector('#start');
const restartButton = document.querySelector('#restart');
const pauseButton = document.querySelector('#pause');

class Stopwatch {
    constructor(hrs, mins, secs) {
        this.hrs = hrs;
        this.mins = mins;
        this.secs = secs;
    }

    countSeconds() {
        setInterval(function() {
            this.seconds = 0;
            this.seconds += 1;
            this.updateDisplay();
        }, 1000);
    }

    updateDisplay() {
        this.secs.innerHTML = this.seconds.toString();
    }
}

const stopwatch = new Stopwatch(hrs, mins, secs);

startButton.addEventListener('click', button => {
    stopwatch.countSeconds();
});