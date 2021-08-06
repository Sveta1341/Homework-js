let array = [4, 2, 6, 3, 9, 1, 7, 8, 4, 1, -8, 5, 0, -1, 2, 11, 19, 30, 2]
console.log(array)
let i;
let summ = 0;
for (i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		summ += array[i];
	} else if (array[i] < 0) {
		break
	}
}

console.log(summ)




