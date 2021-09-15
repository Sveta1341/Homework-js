function goToShop() {
	let promise1 = new Promise((resolve) => {
		let num = Math.floor(Math.random() * 10) + 1;
		Promise.resolve(`products: ${num}`)
	})
}
promise1.then(res => {
	if (num < 4) {
		Promise.reject("Too low products")
	}
})
	.then(res => {
		if (num > 4) {
			Promise.resolve(makeDinner())
		}
	})
function makeDinner() {
	setTimeout(() => {
		console.log('Bon Appetit')
	}, 3000);
}
