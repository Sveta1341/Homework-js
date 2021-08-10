let Arr = ['f', 'K', 'j', 's', 'd', 'A', 'b', 'E', 'j', 'q', 'o', 'Y', 'p', 'R', 'L'];
function array(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			if (arr[i] === arr[i].toLowerCase()) {
				arr[i] = arr[i].toUpperCase();
			} else {
				arr[i] = arr[i].toLowerCase();
			}

		}
	}
	return arr;
}
console.log(Arr)
console.log(array(Arr));