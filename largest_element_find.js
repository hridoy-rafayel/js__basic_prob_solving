
function largestElement(array) {
    let largest = array[0];
    for (i = 0; i <= array.length; i++) {
        const element = array[i];
        // console.log(element)
        if (element > largest) {
            largest = element;
        }
    }
    console.log(largest);
}

const numbers = [1, 22, 3, 4, 5, 6, 7, 8, 9];
// console.log(largestElement(numbers));
largestElement(numbers);