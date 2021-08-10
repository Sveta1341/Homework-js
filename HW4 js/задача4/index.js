let array = ['у', 'ы', 'ф', 'й', 'ц', 'к', 'ч', 'с', 'м', 'н', 'о', 'я', 'д', 'з', 'ю'];
let gl = 0;
let stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
function letters(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < stringsearch.length; j++) {
			if (array[i] === stringsearch[j]) {
				gl++;
			}


		}
	}
	return array
}


console.log(letters(array))
console.log(gl)



