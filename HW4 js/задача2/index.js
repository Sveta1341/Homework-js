function randomName(length) {
	let value = 'qwertyuiopasdfghjklzxcvbnm';
	let result = '';
	for (let i = 0; i < length; i++) {
		let index = Math.round(Math.random() * (value.length - 1));
		let char = value[index];
		for (let i = 0; i < value.length; i++) {
			char = char.toUpperCase();
		}
		result += char;
	}
	return result;
}
console.log(randomName(11))