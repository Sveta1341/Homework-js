let array = ['.', ':', ',', '!', '&', '?', ';', '/', '+', '%', ';'];

let i;
let z = 0;
let tch = 0;
let tk = 0;
for (i = 0; i < array.length; i++) {

	if (array[i] === ':') {
		tch++;
	} else if (array[i] === ';') {
		tk++;

	} else if (array[i] === '*') {
		z++;
	}
}

console.log(array)
console.log(` '*' : ${z}`);
console.log(` ';': ${tk}`);
console.log(` ':': ${tch}`)