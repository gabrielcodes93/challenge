const nonConstructibleChange = require('./nonConstructibleChange');

test('Non-Constructible Change of [5, 7, 1, 1, 2, 3, 22] is 20 ', () => {
    expect(nonConstructibleChange( [5, 7, 1, 1, 2, 3, 22])).toBe(20);
});

test('Non-Constructible Change of [1, 1, 1, 1, 1] is 6 ', () => {
    expect(nonConstructibleChange( [1, 1, 1, 1, 1])).toBe(6);
});

test('Non-Constructible Change of [1, 5, 1, 1, 1, 10, 15, 20, 100] is 55 ', () => {
    expect(nonConstructibleChange( [1, 5, 1, 1, 1, 10, 15, 20, 100])).toBe(55);
});
