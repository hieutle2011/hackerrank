// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleys = 0;

    let sea_level = 0;
    let isValey = false;
    let below = false;
    let upto = false;

    const ar = s.split('');

    for (let i = 0; i < n; i++) {
        const step = ar[i];
        
        if (sea_level === 0 && step === 'D') {
            isValey = true;
        }

        if (step === 'U') {
            sea_level += 1;
        } else if (step === 'D') {
            sea_level -= 1;
        }

        if (sea_level < 0) {
            below = true;
        }

        if (sea_level >= 0) {
            upto = true;
        }

        if (isValey && below && upto) {
            valleys += 1;

            // reset for a new valley
            below = false;
            upto = false;
            isValey = false;
        }
    }
    return valleys;
}

module.exports = countingValleys;

function main() {
    // const line_1 = "8";
    // const s = "UDDDUDUU";

    const line_1 = "12";
    const s = "DDUUDDUDUUUD";
    const n = parseInt(line_1, 10);
    let result = countingValleys(n, s);

    console.log(result);
}

// main()