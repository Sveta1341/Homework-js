function goToShop() {
	return new Promise((resolve, reject) => {
		let num = Math.floor(Math.random() * 10) + 1;
		console.log(`products: ${num}`)
		if (num < 4) {
			reject("Too low products")
		} else {
			resolve(makeDinner())
		}
	})
}
function makeDinner() {
	setTimeout(() => {
		console.log('Bon Appetit')
	}, 3000);
}
try {
	const promise = goToShop();
	promise.then();
} catch {
	console.log(e.name + ': ' + e.message);
}