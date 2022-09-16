//===== Write a function that will take an array and will return ODD sum and EVEN sum.

function oddEvenSun(elements) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] % 2 == 0) {
            evenSum = evenSum + elements[i];
        }
        else {
            oddSum = oddSum + elements[i];
        }
    }
    return { evenSum, oddSum };
    // console.log("Even sum: ", evenSum, "Odd sun: ", oddSum);
}

const inputArray = [56, 2, 1, 10, 8, 19, 27, 90, 131];

// oddEvenSun(inputArray);
// console.log(oddEvenSun(inputArray).oddSum);
// console.log(oddEvenSun(inputArray).evenSum);

console.log(oddEvenSun(inputArray));
