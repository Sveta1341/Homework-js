let array = [1, 2, 3, 4, -5, -6, 7, 8, 0, 0, 0, 0, 0, -14, 15];

let i;
let negative = 0;
let positive = 1;
let zero = 0;
for (i = 0; i < array.length; i++) {

	if (array[i] < 0) {
		negative++;
	} else if (array[i] > 0) {

		positive *= array[i];

	} else {
		zero++;
	}
}

console.log(` negative nubmers: ${negative}`);
console.log(` positive elements: ${positive}`);
console.log(`zero elements: ${zero}`)