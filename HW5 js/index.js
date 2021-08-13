function random(number) {
	let array = [];
	function mas() {
		if (array.length == number) array = [];
		let i = Math.floor(Math.random() * number) + 1;
		return array.includes(i) ? mas() : (array.push(i), i)

	}
	return mas;
}

let result = random(100);

console.log(result());
console.log(result());
console.log(result());
