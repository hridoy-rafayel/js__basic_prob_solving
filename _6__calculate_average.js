//== 1. Calcute the average of all the numbers that divisible by 3 (n) from 1 to n.

function calculateAverage(n) {
    let sum = 0; count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            // console.log(i);
            count = count + 1;
            sum = sum + i;
        }
    }
    // console.log(sum);
    // console.log(count);
    return sum / count;
}

// console.log(calculateAverage(15));
// calculateAverage(12);


//== 2. Calcute the average of all the numbers that divisible by N from 1 to N

function calculateAverage2(n, p) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % p == 0) {
            console.log(i)
            sum = sum + i;
        }
    }
    return sum;

}

// const total = calculateAverage2(15, 5);
// console.log("Total: ", total);

