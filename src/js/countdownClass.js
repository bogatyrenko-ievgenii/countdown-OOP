'use strict';

export class CountDownToRemaining {
    constructor (endTime, {days, hours, minutes, seconds}) {
        this.endTime = endTime;
        this.days = days; //selector
        this.hours = hours; //selector
        this.minutes = minutes; //selector
        this.seconds = seconds; //selector
        this.setClock(this.getTimeToRemaining());
    }

    getDays = (time) => {
        return Math.floor(time / (1000 * 60 * 60 * 24))
    }

    getHours = (time) => {
        return Math.floor(time / (1000 * 60 * 60) % 24);
    };

    getMinutes = (time) => {
        return Math.floor(time / (1000 * 60) % 60);
    }

    getSeconds = (time) => {
        return Math.floor(time / 1000 % 60);
    }

    getTimeToRemaining = () => {
        let time = Date.parse(this.endTime) - new Date();
        return time > 0 ? time : 0;
    }

    setClock = (time) => {
        const addZero = (number) => {
            return number >= 0 && number <= 9 ? `0${number}` : number;
        }

        let seconds = addZero(this.getSeconds(time));
        let minutes = addZero(this.getMinutes(time));
        let hours = addZero(this.getHours(time));
        let days = addZero(this.getDays(time));

        this.days.innerHTML = days;
        this.hours.innerHTML = hours;
        this.minutes.innerHTML = minutes;
        this.seconds.innerHTML = seconds;
    }


    getStart = () => {
        let time = 0;

        const setClock = setInterval(() => {
            time = this.getTimeToRemaining();

            if (time <= 0) {
                stopCountDown();
            } else {
                this.setClock(time);
            }
        }, 1000);

        const stopCountDown = () => {
            clearInterval(setClock);
        }
    }
}



