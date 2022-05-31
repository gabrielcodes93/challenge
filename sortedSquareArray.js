
const sortedSquareArray = (numbers) => {
    let result = new Array(numbers.length);

    let left = 0;
    let right = numbers.length - 1;

    let index = numbers.length - 1;

    while (left <= right) {
        let leftValue = numbers[left] * numbers[left];
        let rightValue = numbers[right] * numbers[right];

        if (leftValue < rightValue) {
            result[index] = rightValue;
            right--;
        } else {
            result[index] = leftValue;
            left++;
        }

        index--;
    }

    return result;
}

module.exports = sortedSquareArray;
