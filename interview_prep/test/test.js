var assert = require('assert');
const sockMerchant = require('../sock-merchant');
const countingValleys = require('../counting-valleys');
const repeatedString = require('../repeated-string');


describe('Sock Merchant', function () {
  it('should return 3 for Sample test case 0', function () {
    const line_1 = '9';
    const line_2 = "10 20 20 10 10 30 50 10 20";
    const n = parseInt(line_1, 10);
    const ar = line_2.split(' ').map(arTemp => parseInt(arTemp, 10));
    assert.equal(sockMerchant(n, ar), 3);
  });
  it('should return 4 for Sample test case 1', function () {
    const line_1 = '10';
    const line_2 = "1 1 3 1 2 1 3 3 3 3";
    const n = parseInt(line_1, 10);
    const ar = line_2.split(' ').map(arTemp => parseInt(arTemp, 10));
    assert.equal(sockMerchant(n, ar), 4);
  });
  it('should return 6 for Test case 1', function () {
    const line_1 = '15';
    const line_2 = "6 5 2 3 5 2 2 1 1 5 1 3 3 3 5";
    const n = parseInt(line_1, 10);
    const ar = line_2.split(' ').map(arTemp => parseInt(arTemp, 10));
    assert.equal(sockMerchant(n, ar), 6);
  });
});

describe('Counting Valleys', function () {
  it('should return 1 for Sample test case 0', function () {
    const line_1 = '8';
    const ar = "UDDDUDUU";
    const n = parseInt(line_1, 10);
    assert.equal(countingValleys(n, ar), 1);
  });
  it('should return 2 for Sample test case 1', function () {
    const line_1 = '12';
    const ar = "DDUUDDUDUUUD";
    const n = parseInt(line_1, 10);
    assert.equal(countingValleys(n, ar), 2);
  });
});

describe('Repeated String', function () {
  it('should return 7 for Sample test case 0', function () {
    const s = 'aba';
    const line_2 = "10";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 7);
  });
  it('should return 1000000000000 for Sample test case 1', function () {
    const s = 'a';
    const line_2 = "1000000000000";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 1000000000000);
  });
  it('should return 588525 for Test case 2', function () {
    const s = 'aab';
    const line_2 = "882787";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 588525);
  });
  it('should return 0 for Test case 3', function () {
    const s = 'ceebbcb';
    const line_2 = "817723";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 0);
  });
  it('should return 164280 for Test case 4', function () {
    const s = 'gfcaaaecbg';
    const line_2 = "547602";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 164280);
  });
  it('should return 0 for Test case 5', function () {
    const s = 'x';
    const line_2 = "970770";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 0);
  });
  it('should return 51574523448 for Test case 7', function () {
    const s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
    const line_2 = "736778906400";
    const n = parseInt(line_2, 10);
    assert.equal(repeatedString(s, n), 51574523448);
  });
});