var assert = require('assert');
const sockMerchant = require('../sock-merchant')
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
