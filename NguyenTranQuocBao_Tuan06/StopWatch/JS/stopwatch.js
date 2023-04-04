window.onload = function() {
    var hour = 00;
    var minute = 00;
    var second = 00;
    var milisc = 00;
    var addMilisc = document.getElementById("milisc");
    var addSecond = document.getElementById("second");
    var addMinute = document.getElementById("minute");
    var addHour = document.getElementById("hour");
    var buttonST = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonRS = document.getElementById("button-reset");
    var Interval;

    buttonST.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    buttonRS.onclick = function() {
        clearInterval(Interval);
        milisc = "00";
        second = "00";
        addMilisc.innerHTML = milisc;
        addSecond.innerHTML = second;
    }

    function startTimer() {
        milisc++;

        if (milisc <= 9) {
            addMilisc.innerHTML = "0" + milisc;
        }
        if (milisc > 9) {
            addMilisc.innerHTML = milisc;
        }
        if (milisc > 99) {
            console.log("second");
            second++;
            addSecond.innerHTML = "0" + second;
            milisc = 0;
            addMilisc.innerHTML = "0" + 0;
        }
        if (second > 9) {
            addSecond.innerHTML = second;
        }
        if (second > 59) {
            console.log("minute");
            minute++;
            addMinute.innerHTML = "0" + minute;
            second = 0;
            addSecond.innerHTML = "0" + 0
        }
    }
}