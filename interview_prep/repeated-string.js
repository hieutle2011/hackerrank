// Complete the repeatedString function below.
function repeatedString(s, n) {
    if (!s.includes('a')) return 0;
    if (s === 'a') return n;
    const { divident, remainder } = my_divide(n, s.length);
    const number_a_in_s = count_a(s);
    const number_a_in_substr = count_a(substr(s, remainder));
    const result = number_a_in_s * divident + number_a_in_substr;
    return result;
}

function count_a(s) {
    return (s.match(/a/g) || []).length;
}

function substr(s, remainder) {
    return s.substring(0, remainder);
}

function my_divide(n, divider) {
    const remainder = n % divider;
    const divident = (n - remainder) / divider;
    return { divident, remainder };
}

module.exports = repeatedString;
