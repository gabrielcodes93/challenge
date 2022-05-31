# Install

run `npm install`

# Run testes

run `npm run test`

## Sample output
```
> tests@1.0.0 test
> jest

 PASS  ./nonConstructibleChange.test.js
 PASS  ./sortedSquareArray.test.js

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.307 s, estimated 1 s
Ran all test suites.
 gmarquez@gmarquez  ~/projects/tests  npm run test

> tests@1.0.0 test
> jest --verbose

 PASS  ./nonConstructibleChange.test.js
  ✓ Non-Constructible Change of [5, 7, 1, 1, 2, 3, 22] is 20  (2 ms)
  ✓ Non-Constructible Change of [1, 1, 1, 1, 1] is 6 
  ✓ Non-Constructible Change of [1, 5, 1, 1, 1, 10, 15, 20, 100] is 55 

 PASS  ./sortedSquareArray.test.js
  ✓ Square of [1, 2, 3, 5, 6, 8, 9] is [1, 4, 9, 25, 36, 64, 81] (2 ms)
  ✓ Square of [-10, -5, 0, 5, 10] is [0,25,25,100,100]
  ✓ Square of [-2, 1] is [1,4] (1 ms)

Test Suites: 2 passed, 2 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.277 s, estimated 1 s
Ran all test suites.
```