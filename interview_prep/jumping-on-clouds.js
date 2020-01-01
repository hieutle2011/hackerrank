// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    const avoid_cloud = 1;
    const max_index = c.length - 1;
    let jumps = 0;

    let i = 0;
    while (i <= max_index) {
        if (within_bound_2(i, max_index) && (c[i + 2] != avoid_cloud)) {
            i += 2;
            jumps += 1;
        } else if (within_bound_1(i, max_index) && (c[i + 1] != avoid_cloud)) {
            i += 1;
            jumps += 1;
        } else {
            return jumps;
        }
    }
}

function within_bound_2(index, max_index) {
    if (index + 2 <= max_index) return true;
    else return false;
}

function within_bound_1(index, max_index) {
    if (index + 1 <= max_index) return true;
    else return false;
}

module.exports = jumpingOnClouds;

// function main() {
//     const line_2 = "0 0 1 0 0 1 0";
//     const c = line_2.split(' ').map(arTemp => parseInt(arTemp, 10));
//     let result = jumpingOnClouds(c);
//     console.log(result);
// }

// main()