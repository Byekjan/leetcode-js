digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
    let num = '';
    let result = [];
    for(let i = 0; i < digits.length; i++) {
        num = num + digits[i];
    }
    num = BigInt(num) + 1n;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        result[i] = num[i];
    }
    return result;
};

console.log(plusOne(digits));