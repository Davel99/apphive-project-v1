export default class Crono {
    constructor() {
        this.vars();
        this.chronometer_id;
        this.domLoader();
        this.events();
    }

    vars() {
        this.isRunning = false;
        this.ms = 0;
        this.seg = 0;
        this.min = 0;

        this.lastMs = 0;
        this.lastSeg = 0;
        this.lastMin = 0;

        this.startDate = null;
        this.lastDate = null;

        this.baseMs = 1000;
        this.baseMin = 60_000;
    }

    domLoader() {
        this.el = {
            min: document.querySelector('#crono-m'),
            seg: document.querySelector('#crono-s'),
            ms: document.querySelector('#crono-ms')
        }

        this.btns = {
            start: document.querySelector('#crono-start'),
            stop: document.querySelector('#crono-stop')
        }
    }

    events() {
        this.btns.start.addEventListener('click', () => this.start());
        this.btns.stop.addEventListener('click', () => this.stop());
    }

    start() {
        this.isRunning = !this.isRunning;

        if (this.isRunning) {
            if (this.lastDate) {
                let difference = Date.now() - this.pauseDate;
                this.startDate = this.lastDate + difference;
            } else {
                this.startDate = Date.now();
            }
            this.chronometer_id = setInterval(() => this.chronometer(), 30);
            this.btns.start.innerHTML = "PAUSE";
        } else {
            clearInterval(this.chronometer_id);
            this.lastMs = this.ms;
            this.lastSeg = this.seg;
            this.lastMin = this.min;

            this.pauseDate = Date.now();
            this.lastDate = this.startDate;

            this.btns.start.innerHTML = "START";
        }
    }

    stop() {
        this.isRunning = false;
        this.resetAll();
        clearInterval(this.chronometer_id);
        this.chronometer_id = null;
        this.startDate = null;
    }

    chronometer() {
        let currentTime = Date.now() - this.startDate;

        this.ms = (currentTime % this.baseMs);
        this.msPrinter();
        this.seg = Math.floor(currentTime / this.baseMs);
        if (this.seg >= 60) {
            this.min = Math.floor(currentTime / this.baseMin);
            this.minPrinter();
            this.seg -= 60;
        }
        this.segPrinter();

        return true;
    }

    async msPrinter() {
        let msgMs = '';
        if (this.ms > 999) {
            this.ms -= 1000;
        }

        if (this.ms < 10) {
            msgMs = '00';
        } else if (this.ms < 100) {
            msgMs = '0';
        }
        msgMs += this.ms;
        this.el.ms.innerHTML = msgMs;
        return true;
    }

    async segPrinter() {

        let msgSeg = '';
        if (this.seg < 10) {
            msgSeg = '0';
        }
        msgSeg += this.seg;
        this.el.seg.innerHTML = msgSeg;
        return true;
    }

    async minPrinter() {
        let msgMin = '';

        if (this.min < 1) {
            msgMin = '00';
        } else if (this.min < 10 && this.min > 0) {
            msgMin = '0' + this.min;
        } else {
            msgMin = this.min;
        }

        this.el.min.innerHTML = msgMin;

        return true;

    }

    resetAll() {
        let zero = '00';
        this.el.min.innerHTML = zero;
        this.el.seg.innerHTML = zero;
        this.el.ms.innerHTML = zero + '0';

        this.ms = 0;
        this.seg = 0;
        this.min = 0;

        this.lastMs = 0;
        this.lastSeg = 0;
        this.lastMin = 0;
    }


}