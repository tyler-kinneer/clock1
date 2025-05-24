
function displayTime() {

let currentTime = new Date();
let hrs = currentTime.getHours();
let min = currentTime.getMinutes();
let sec = currentTime.getSeconds();
let session = document.getElementById('session');

if (hrs >= 12) {
    session.innerHTML = 'PM';
} else {
    session.innerHTML = 'AM';
}

if (hrs>12){
    hrs = hrs -12;
}

document.getElementById('hrs').innerHTML = hrs;
document.getElementById('min').innerHTML = min;
document.getElementById('sec').innerHTML = sec;

}
setInterval(displayTime, 10);