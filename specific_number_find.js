//========= 1. Print all even numbers from 1 to 20.

function printEven() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            if (i % 3 === 0) {
                console.log(i);
            }
        }
    }
}
// printEven();


//========= 2. count numbers divisible by 3 from 1 - 20;

function divisibleBy3() {
    let numCount = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            // console.log(i);
            numCount = numCount + 1;
        }
    }
    console.log(numCount);
}

// divisibleBy3();


//========= 3. 