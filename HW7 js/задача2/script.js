function setClock(place) {
	let container = new Date()
	let hour = container.getHours()
	let minute = container.getMinutes()
	let second = container.getSeconds()
	if (hour < 10) { hour = "0" + hour }
	if (minute < 10) { minute = "0" + minute }
	if (second < 10) { second = "0" + second }
	let timer = hour + ":" + minute + ":" + second
	document.getElementById(place).innerHTML = timer
}
let time = setInterval("setClock('showTimer')", 1000);
