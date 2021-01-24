Array.from({length : 100}, (v,i) => i).forEach(number => printBoomOrNum(number,7))

function printBoomOrNum(number, numToBoom) {
    if (number % numToBoom == 0 || isSevenIncluded(number, numToBoom)) {
        console.log('Boom');
    }
    else {
        console.log(number);
    }
}

function isSevenIncluded(number, numToBoom) {
    while (number != 0) {
        if (number % 10 == numToBoom) {
            return true
        }
        number = Math.floor(number / 10);
    }
    return false;
}
