function randomNumbers() {
	let result = [];
	for (let i = 0; i < 10; i++) {
		let index = Math.round(Math.random() * 10);
		result.push(index);
	}
	return result
}
let arr = randomNumbers(10);
console.log(arr)

function change(result) {
	for (let i = 0; i < 10; i++) {
		result[i] = '*';
	}
	return result;
}
change(arr);
console.log(arr);