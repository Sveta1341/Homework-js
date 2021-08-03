let array = [10, 3, 7, 1, 5, 0, 2]
function average(nums) {
	return nums.reduce((a, b) => (a + b)) / nums.length;
}
console.log(average(array))