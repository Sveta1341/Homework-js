let numberArray = [32, 1, 4, 17, 50, 9];
let maxValue = Math.max.apply(null, numberArray);
let findMax = numberArray.indexOf(maxValue)
let minValue = Math.min.apply(null, numberArray);
let findMin = numberArray.indexOf(minValue)
console.log(numberArray)
console.log(`Максимальное ${findMax}`)
console.log(`Минимальное ${findMin}`)
