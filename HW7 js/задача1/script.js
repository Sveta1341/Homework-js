let number = 0;

number = prompt("Enter number");

while (isNaN(number) || number == undefined) {
	number = prompt("Enter the number");
}
for (let i = 1; i <= number; i++) {
	let input = document.createElement("input");
	input.classList.add('input-item');
	input.value = `Input${i}`;
	if (i === number) {
		input.classList.add('margin-zero');
	}
	document.querySelector('#register').before(input);
}
let button = document.querySelector('#register');
button.addEventListener('click', change);

function change() {
	let items = Array.from(document.querySelectorAll('.input-item'));

	for (let index in items) {

		if ((+index + 1) % 2 !== 0) {
			items[index].classList.add('background');
		}
		if ((+index + 1) % 3 == 0) {
			items[index].value = '';
			items[index].setAttribute("placeholder", "some text");
		}
	}


}

