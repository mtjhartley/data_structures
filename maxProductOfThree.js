const valuesNeg = [-10, 3, -2, 1, 20];
const valuesPos = [-10, 3, -2, 10, 20];

//n log(n)
const maxProductOfThreeSort = (array) => {
    array.sort((a, b) => a-b);
    return Math.max(
        array[0] * array[1] * array[array.length -1],
        array[array.length -1] * array[array.length -2] * array[array.length -3]
    )
}

console.log(maxProductOfThreeSort(valuesNeg));
console.log(maxProductOfThreeSort(valuesPos));

