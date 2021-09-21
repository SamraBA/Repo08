// Only change code below this line
function convertToInt(str) {
    return parseInt(str, 16);
}
convertToInt();

convertToInt("BA");


console.log(parseInt(convertToInt("BA")));
console.log(parseInt(convertToInt("F1")));
console.log(parseInt(convertToInt("JeffBezos")));

// Only change code above this line
module.exports = convertToInt;