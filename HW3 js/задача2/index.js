let array = [10, 2, 6, 3, 9, 1, 7, 15, 4, 11, 8, 19]
let max = Math.max.apply(null, array);
let min = Math.min.apply(null, array);
console.log(array)
console.log(`Максимальное: ${max}`)
console.log(`Минимальное: ${min}`)
let lengh = array.slice(5, 11).length
console.log(`количество чисел, стоящих между максимальным и минимальным элементами: ${lengh}`)
