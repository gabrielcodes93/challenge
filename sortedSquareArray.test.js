const sortedSquareArray = require('./sortedSquareArray');

test('Square of [1, 2, 3, 5, 6, 8, 9] is [1, 4, 9, 25, 36, 64, 81]', () => {
    expect(sortedSquareArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81]);
});

test('Square of [-10, -5, 0, 5, 10] is [0,25,25,100,100]', () => {
    expect(sortedSquareArray([-10, -5, 0, 5, 10])).toEqual([0,25,25,100,100]);
});

test('Square of [-2, 1] is [1,4]', () => {
    expect(sortedSquareArray([-2, 1])).toEqual([1,4]);
});