let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let result = Math.floor(Math.random() * 6) + 1;
		resolve(result);

	}, 2000);


});
promise1.then(result => {
	console.log(result)
})
promise1.then(result => {
	if (1 <= result <= 5) {
		console.log('Start the game...')
	}

})
promise1.then(result => {
	if (result == 1) {
		console.log('Stay here')
	}

})
promise1.then(result => {
	if (result >= 2) {
		console.log(`Go ${result} steps`)
	}
})
promise1.then(result => {
	if (result == 6) {
		throw ('error')
		resolve();
	}

})
promise1.catch(error => {
	console.log(error)
})
