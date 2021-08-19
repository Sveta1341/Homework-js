let body = document.querySelector('body');

createButtons();
createButtons();
createButtons();
createButtons();

function createButtons() {
	let array = [];
	let container = document.createElement('div');
	container.classList.add('container');
	container.classList.add('pt-5');
	body.prepend(container);

	for (let i = 0; i < 8; i++) {
		//array[i] = i;


		let button = document.createElement('button')
		//  button.innerHTML = array[i];
		button.innerHTML = i;
		array[i] = button;

		button.addEventListener('click', function () {
			let temp = [];

			for (let item of array) {
				temp.push(item.innerHTML);

			}
			temp.sort((a, b) => 0.5 - Math.random());
			for (let i = 0; i < temp.length; i++) {
				array[i].innerHTML = temp[i]
			}


		});

		container.append(button);
	}
}





