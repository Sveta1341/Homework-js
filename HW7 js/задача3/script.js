let coffeeMachine = {
	message: 'Your coffee is ready!',
	start: function () {
		setTimeout(() => {
			console.log(`${this.message}`)

		}, 3000);
	},
}

let teaPlease = {
	message: 'Wanna some tea instead of coffee?',
	start: function () {
		setTimeout(() => {
			console.log(`${this.message}`)

		}, 3000);
	},
}
coffeeMachine.start();
let start = coffeeMachine.start.bind(teaPlease);
start();
