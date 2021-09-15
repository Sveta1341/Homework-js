let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let result = Math.floor(Math.random() * 6) + 1;
		console.log(result)
		if (result === 6) {
			reject("Exit")
		} else {
			console.log("Start the game...")
			resolve(result)
		}

	}, 1000);


})
	.then(value => {
		value === 1 ? console.log("Stay here") : console.log("Go " + value + " steps")
	}).catch(error => {
		console.log(error)
	})