const array = [7, 2, 9, 4, 5];
let max = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] >= max) {
        max = array[i]
    }
}
console.log(max);
let min = array[0]
for (let i = 0; i < array.length; i++) {
    if (array[i] <= min) {
        min = array[i]
    }
}
console.log(min);