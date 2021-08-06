let arr = [5, 2, 1, -5, 8, 3, 9, 15, 4, 7, 0, -1];
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
console.log(arr)
console.log(`Максимальное: ${max}`)
console.log(`Минимальное: ${min}`)
let length = arr.slice(3, 8)
console.log(`границы интервала: ${length}`)