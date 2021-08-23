console.warn('1. Дан массив развернуть этот массив в обратном направлении')
let array = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']
for (i = array.length - 1; i >= 0; i--) {
	console.log(array[i]);
}

console.warn('2. Дан массив развернуть этот массив в обратном направлении')
let array2 = [44, 12, 11, 7, 1, 99, 43, 5, 69]
for (i = array2.length - 1; i >= 0; i--) {
	console.log(array2[i]);
}


console.warn('3. Дана строка,развенуть строку в обратном направлении.')
let str = 'Hi I am ALex'
function changeDirectionString(str) {
	let newString = [];
	for (let i = str.length - 1; i >= 0; i--) {
		newString.push(str[i]);
	}
	let result = newString + '';
	let result2 = '';
	for (let j = 0; j < result.length; j++) {
		if (result[j] !== ',') {
			result2 += result[j];
		}
	}
	return console.log(result2);
}
changeDirectionString(str);



console.warn('4. Дана строка. готовую функцию toUpperCase() or tolowercase(), сделать ее с с маленьких букв')
let string = 'Hi I am ALex'
function toLower(string) {
	return string.toLowerCase();
}
console.log(toLower(str));


console.warn('5. Дана строка, сделать все буквы большие')
let string2 = 'Hi I am ALex'
function toUpper(string) {
	return string.toUpperCase();
}
console.log(toUpper(str));



console.warn('6. Дана строка, развернуть ее в обратном направлении')
let string3 = 'Hi I am ALex'
function changeDirectionString(str) {
	let newString = [];
	for (let i = str.length - 1; i >= 0; i--) {
		newString.push(str[i]);
	}
	let result = newString + '';
	let result2 = '';
	for (let j = 0; j < result.length; j++) {
		if (result[j] !== ',') {
			result2 += result[j];
		}
	}
	return console.log(result2);
}
changeDirectionString(string3);


console.warn('7. Дан массив,сделать все буквы с маленькой')
let array4 = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']
function changetoLower(arr) {
	arr2 = [];
	for (const value of arr) {
		arr2.push(value.toLowerCase());
	}
	return console.log(arr2);
}
changetoLower(array4);

console.warn('8. Дан массив,сделать все буквы с большой')
let array5 = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya']
function changetoUpper(arr) {
	arr2 = [];
	for (const value of arr) {
		arr2.push(value.toUpperCase());
	}
	return console.log(arr2);
}
changetoUpper(array5);

console.warn('9. Дано число,развернуть ее в обратном направлении')
let num = 1234678
function changeDirection(n) {
	let r = n + '';
	let result = '';
	for (let i = r.length - 1; i >= 0; i--) {
		result += r[i];
	}
	return Number(result);
}
console.log(changeDirection(num));



console.warn('10. Дан массив,отсортируй его в порядке убывания')
let array3 = [44, 12, 11, 7, 1, 99, 43, 5, 69]
function arrayDescending(arr) {
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
console.log(arrayDescending(array3));
