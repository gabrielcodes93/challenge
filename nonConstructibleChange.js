
const nonConstructibleChange = (coins) => {

    const sortedCoins = coins.sort((a, b) => a - b);

    const biggestElement = sortedCoins[coins.length - 1];

    let sumOthers = 0;

    for (let i = 0; i < sortedCoins.length - 1; i++) {
        sumOthers += sortedCoins[i];
    }

    if (sumOthers < biggestElement) {
        return ++sumOthers;
    } else {
        return 1 + coins.reduce((a, b) => a + b);
    }
}


module.exports = nonConstructibleChange;