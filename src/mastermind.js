const colors = require('./colors')
const hints = require('./hints')

function getRandom() {
    let zufall = Math.random();
    return zufall;
}

function pickColor(getRandom) {
    let randomNumber = getRandom();

    if (randomNumber >= 1.0) {
        let safety = randomNumber - Math.trunc(randomNumber);
        randomNumber = safety.toFixed(3);

    }

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
   
   
}


function generateCode() {
    
    let farbcode = [];
    for (var i = 0; i <= 3; i++) {

        farbcode[i] = pickColor(getRandom);

        while (farbcode[i] === farbcode[i - 1] || farbcode[i] === farbcode[i - 2] || farbcode[i] === farbcode[i - 3]) {
            farbcode[i] = pickColor(getRandom);
        }

    }
    return farbcode;
 

}

function checkCode(code, guess) {
    const result = [];

    for (var i = 0; i <= 3; i++) {
        if (code[i] === guess[i]) {
            result.push(hints.FITS)
        } else if (code.indexOf(guess[i]) !== -1) {

            result.push(hints.PARTIALLY)

        } else {
            result.push(hints.WRONG)

        }
    }
    return result

}


module.exports = {
    getRandom,
    pickColor,
    generateCode,
    checkCode
}