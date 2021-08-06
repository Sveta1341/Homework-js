let array = [1, 5, 7, 3, 4, 8, 11, 9, 20, 2, 10, 6, 12, 33, 2, 16, 17]
let even = 0
let odd = 0
function sum(num) {
	for (let i = 0; i < num.length; i++) {
		if (num[i] % 2 === 0) {
			even++;
		}
		else {
			odd++;
		}
	}
}

console.log(odd)