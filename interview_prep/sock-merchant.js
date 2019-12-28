'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pair = 0;
    const sort_arr = ar.sort((a, b) => a - b);
    let cur_count = 1;

    for (let i = 1; i < n; i++) {
        const a = sort_arr[i - 1];
        const b = sort_arr[i];
        if (a === b) {
            cur_count += 1;
            if (cur_count === 2) {
                pair += 1
                cur_count = 0
            }
        } else {
            cur_count = 1;
        }
    }
    return pair;
}

module.exports = sockMerchant;

function main() {

    const line_1 = '15';
    const line_2 = "6 5 2 3 5 2 2 1 1 5 1 3 3 3 5";

    const n = parseInt(line_1, 10);
    const ar = line_2.split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    console.log(result);

}

// main();