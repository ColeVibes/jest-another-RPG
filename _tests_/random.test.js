
const checkIfEqual = require('./lib/random.js');

test('checks if equal to 10',  () => {
    expect(checkIfEqual(10,10)).toBe(true);
});