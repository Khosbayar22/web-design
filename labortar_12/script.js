var clock,
    clockNum,
    clockNumSpan,
    clockSpanNum,
    seprator,
    clockArm,
    centerClock,
    rotateNums = 30,
    rotateSeprator = 6,
    clocks = document.getElementById("clock"),
    clockSeprator = document.getElementsByClassName("sep"),
    Nums = document.getElementsByClassName("clock-num"),
    NumSpan = document.getElementsByClassName('number');

/*Undsen div iiig uusgev*/
clock = document.createElement("Div");
document.body.appendChild(clock);
clock.setAttribute('id', 'clock')

for (var i = 0; i < 12; i++) {
    /*Tsagiin toonuudiin saviig oruulav*/
    clockNum = document.createElement('div');
    clock.appendChild(clockNum);
    clockNum.setAttribute('class', 'clock-num');
    /*Tsagiiin toonuudiig oruulav*/
    clockNumSpan = document.createElement('span');
    clockNum.appendChild(clockNumSpan);
    clockNumSpan.setAttribute('class', 'number');
    /*Toog oruulav*/
    clockSpanNum = document.createTextNode(i + 1);
    clockNumSpan.appendChild(clockSpanNum);
    /*tsag erguulj ajiluuulah*/
    Nums[i].style.transform = "rotate(" + rotateNums + "deg)";
    NumSpan[i].style.transform = "rotate(-" + rotateNums + "deg)";
    rotateNums += 30;
}

for (var i = 0; i < 60; i++) {
    /*Tsagiig zuug erguuleh*/
    seprator = document.createElement('span');
    clock.appendChild(seprator);
    seprator.setAttribute('class', "sep");
    clockSeprator[i].style.transform = "rotate(" + rotateSeprator + "deg)";
    rotateSeprator += 6;
}

for (var i = 1; i <= 3; i++) {
    clockArm = document.createElement('div');
    clock.appendChild(clockArm);
    clockArm.setAttribute('id', "Arm" + i);
}
/*Tsagiin zuug oruulav*/
centerClock = document.createElement('div');
clock.appendChild(centerClock);
centerClock.setAttribute('id', "center");

myclock();

function myclock() {
    var date = new Date(),
    seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    Hours = date.getHours(),
    secondArm = document.getElementById("Arm1"),
    minuteArm = document.getElementById("Arm2"),
    HoursArm = document.getElementById("Arm3");


    secondArm.style.transform = "rotate(" + seconds * 6 + "deg)";
    minuteArm.style.transform = "rotate(" + (minutes * 6 + seconds / 10) + "deg)";
    HoursArm.style.transform = "rotate(" + (Hours * 30 + +minutes / 2) + "deg)";
    setTimeout(myclock, 500);
}