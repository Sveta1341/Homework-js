let seconds = 0;
let minute = 0;
let hour = 0;
let time;
let click = true;
let buttonStart = document.getElementById('StartButton');
buttonStart.addEventListener('click', startTimer);
let buttonStop = document.getElementById('StopButton');
buttonStop.addEventListener('click', stopTimer);
function startTimer() {
	if (click) {
		showTimer();
	}
	click = false;
}
function showTimer() {

	time = setInterval(second, 1000);

	function second() {
		let container = new Date();
		let times = {
			seconds: container.getSeconds(),
			minutes: container.getMinutes(),
			hours: container.getHours(),

		}
		document.getElementById('timer').innerHTML = ` ${times.hours}:${times.minutes}:${times.seconds}`;

	}
}
function stopTimer() {

	clearInterval(time);
	click = true;
	document.getElementById('timer').innerHTML = date;
}

