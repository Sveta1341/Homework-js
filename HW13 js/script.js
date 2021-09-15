function getPost(id) {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(response => response.json())
		.then(function (json) {
			document.getElementById(id).innerHTML = JSON.stringify(json);
		});
}
let record = document.getElementById('record');
let play = document.getElementById('play');
let cards = [];

function handleClick(event) {
	const id = event.target.id;
	if (id) {
		cards.push(id)

	}
}

function start() {
	clearAll();
	record.removeEventListener('click', start);
	record.innerHTML = 'Stop';
	record.addEventListener('click', stop);
	play.setAttribute('disabled', '')

	document.querySelector('blocks').addEventListener('click', handleClick);

}

function stop() {
	record.removeEventListener('click', stop);
	record.innerHTML = 'Start';
	record.addEventListener('click', start);
	play.removeAttribute('disabled')

	document.querySelector('blocks').removeEventListener('click', handleClick);
	console.log(cards)

}


function render(id) {
	return new Promise(resolve => {
		setTimeout(async function () {
			await getPost(id)
			resolve();
		}, 1000);
	})

}

async function run() {
	clearAll();
	console.log(cards);

	for (let id of cards) {
		await render(id);
	}
}

record.addEventListener('click', start)
play.addEventListener('click', run)

function clearAll() {
	let cards = document.querySelectorAll(".card");
	for (let card of cards) {
		card.innerHTML = '';
	}
}