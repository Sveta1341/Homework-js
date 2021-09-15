let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let a = Math.floor(Math.random() * 10);
		let b = Math.floor(Math.random() * 10);
		console.log(`A: ${a}`)
		console.log(`B: ${b}`)
		let result = a + b;
		resolve(result);

	}, 1000);


});
promise1.then(result => {
	console.log(`Sum: ${result}`)
})



let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let num = Math.floor(Math.random() * 10) + 1;
		console.log(`number: ${num}`)
		let result = Math.pow(num, 2);
		resolve(result);

	}, 1000);


});
promise2.then(result => {
	console.log(`Number in a square: ${result}`)
})


let array = []
for (let i = 0; i < 10; i++) {
	array.push(Math.round(Math.random() * 10))
}
console.log(array);