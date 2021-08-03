let array = [-1, -2, -3, 0, 0, 5, 12, 0, -10];

function counter(array) {
	var counter = [0];
	array.forEach(function (a) {
		if (a < 0)
			counter[0]++;
	});
	return counter;
}

let result = counter(array);
alert(result);