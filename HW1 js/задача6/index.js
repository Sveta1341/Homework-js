let A = +prompt('enter A')
let B = +prompt('enter B')

if (A < B) {
	for (let i = A; i <= B; i++)
		console.log(i);
}
let n = B - A + 1
console.log(`Количество чисел: ${n}`)