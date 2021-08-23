console.warn('Найти площадь')
//function declaration
function getSquare(a, b) {
	return a * b
}
console.log(getSquare(2, 8))
//function expression
let expr = function (a, b) {
	return a * b
}
console.log(expr(3, 8))
//стрелочная
let str = (a, b) => a * b
console.log(str(4, 8))

console.warn('Теорема Пифагора')
//function declaration
function declarationPifagor(a, b) {
	return Math.sqrt(a * a + b * b)
}
console.log(declarationPifagor(2, 4))
//function expression
let exp = function (a, b) {
	return Math.sqrt(a * a + b * b)
}
console.log(exp(2, 3))
//стрелочная
let strel = (a, b) => Math.sqrt(a * a + b * b)
console.log(strel(2, 2))

console.warn('Найти дискриминант')
//function declaration
function getDiscriminat(a, b, c) {
	return (b * b - 4 * a * c)
}
console.log(getDiscriminat(1, 4, 3))

//function expression
let discriminat = function (a, b, c) {
	return (b * b - 4 * a * c)
}
console.log(discriminat(2, 6, 3))

//стрелочная
let dis_str = (a, b, c) => (b * b - 4 * a * c)
console.log(dis_str(1, 5, 2))

console.warn('Создать только четные числа до 100')
//function declaration
function getEven() {
	for (let i = 0; i <= 100; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}
console.log(getEven())
//function expression
console.error('function expression')
let even = function () {
	for (let i = 0; i <= 100; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}
console.log(even())
//стрелочная
console.error('стрелочная')
let even_str = () => {
	for (let i = 0; i <= 100; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}
console.log(even_str())

console.warn('Создать не четные числа до 100')
//function declaration
function getOdd() {
	for (let i = 1; i < 100; i += 2) {
		console.log(i);
	}
}

console.log(getOdd())
//function expression
console.error('function expression')
let odd_expr = function () {
	for (let i = 1; i < 100; i += 2) {
		console.log(i);
	}
}

console.log(odd_expr())
//стрелочная
console.error('стрелочная')
let odd_str = () => {
	for (let i = 1; i < 100; i += 2) {
		console.log(i);
	}
}
console.log(odd_str())

console.warn('Создать функцию по нахождению числа в степени')
//function declaration
function pow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}
console.log(pow(2, 3))
//function expression
let pow_expr = function (x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}
console.log(pow_expr(2, 2))
//стрелочная
let pow_str = (x, n) => {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}

	return result;
}
console.log(pow_str(2, 1))


console.warn('написать функцию сортировки')
let array6 = [2, 7, 9, 3, 5, 10, 46, 20, 4];
function sotrt(arr) {
	return function (a) {
		if (a == null) {
			for (let i = arr.length - 1; i > 0; i--) {
				for (let j = 0; j < i; j++) {
					if (arr[j] > arr[j + 1]) {
						let temp = arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			return arr;
		} else {
			for (let i = arr.length - 1; i > 0; i--) {
				for (let j = 0; j < i; j++) {
					if (arr[j] < arr[j + 1]) {
						let temp = arr[j];
						arr[j] = arr[j + 1];
						arr[j + 1] = temp;
					}
				}
			}
			return arr;
		}
	}
}

console.log(sotrt(array6)());
console.log(sotrt(array6)('abs'));

console.warn('написать функцию поиска в массиве')
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function searchNumber(arr, find) {
	for (const value of arr) {
		if (value === find) {
			console.log(value);
		}
	}
}
searchNumber(array, 2);
searchNumber(array, 10);
