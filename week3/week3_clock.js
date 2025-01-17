var battery = 100;
var alarmArr = ['-', '-', '-'];

function batteryDisplay() {
    let batteryTxt = document.getElementById("battery");
    let batteryBox = document.getElementById("batteryBox");
    
    batteryTxt.innerText = battery;
    batteryBox.style.backgroundImage = `linear-gradient(to right, greenyellow ${battery}%, gainsboro ${battery}%)`;

    battery = battery-1;
    if(battery >= 0)  setTimeout(batteryDisplay, 1000);
    else{
        let timeBox = document.getElementById("timeBox");
        timeBox.style.backgroundColor = 'black';
    } 
}

function timeDisplay() {
    const nowTime = new Date();
    let timeTxt = document.getElementById("time");

    timeTxt.innerText = `${String(nowTime.getFullYear()).padStart(4, '0')}-${twoDigit(nowTime.getMonth()+1)}-${twoDigit(nowTime.getDate())}
                        ${twoDigit(nowTime.getHours())}:${twoDigit(nowTime.getMinutes())}:${twoDigit(nowTime.getSeconds())}`;

    if(battery >= 0)  setTimeout(timeDisplay, 1000);
}

function hourCheck() {
    const hour = document.getElementById("hour");

    if(hour.value < 0)  hour.value = 0;
    else if(hour.value > 23)    hour.value =  23;
}

function minuteCheck() {
    const minute = document.getElementById("minute");

    if(minute.value < 0)  minute.value = 0;
    else if(minute.value > 60)    minute.value =  59;
}

function secondCheck() {
    const second = document.getElementById("second");

    if(second.value < 0)  second.value = 0;
    else if(second.value > 60)    second.value =  59;
}

function alarmSet() {
    let hour = document.getElementById("hour").value;
    let minute = document.getElementById("minute").value;
    let second = document.getElementById("second").value;

    if(hour === "" || minute === "" || second === "")    return;

    var alarmTime = twoDigit(hour) + ':' + twoDigit(minute) + ':' + twoDigit(second);

    alarmDisplay(alarmTime);
}

function alarmDisplay(alarmTime) {
    let alarm = document.getElementById("alarm");

    alarmArr[2] = alarmArr[1];
    alarmArr[1] = alarmArr[0];
    alarmArr[0] = alarmTime;

    alarm.innerText = alarmArr[0] + '\n' + alarmArr[1] + '\n' + alarmArr[2];
}

function twoDigit(num){
    return String(num).padStart(2, '0');
}