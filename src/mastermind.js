const colors = require('./colors')

function getRandom() {
    return Math.random()
}

function pickColor(getRandom) {
    let randomNumber = getRandom();
    console.log(randomNumber);
    if (randomNumber < 0.125) {
        return colors.RED
    } else if (randomNumber >= 0.125 && randomNumber < 0.25) {
        return colors.GREEN;
    } else if (randomNumber >= 0.25 && randomNumber < 0.375) {
        return colors.YELLOW;
    } else if (randomNumber >= 0.375 && randomNumber < 0.5) {
        return colors.BLUE;
    } else if (randomNumber >= 0.5 && randomNumber < 0.625) {
        return colors.PURPLE;
    } else if (randomNumber >= 0.625 && randomNumber < 0.75) {
        return colors.ORANGE;
    } else if (randomNumber >= 0.75 && randomNumber < 0.875) {
        return colors.PINK;
    } else if (randomNumber >= 0.875 && randomNumber < 1.00) {
        return colors.BROWN;
    }
    throw new Error('Invalid random function');
   
}


module.exports = {
    getRandom,
    pickColor
}