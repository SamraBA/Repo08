// Only change code below this line

   
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;    
}


randomRangeNumber();
console.log(randomRangeNumber(2, 8));

// Only change cod above this line

    module.exports = randomRangeNumber;