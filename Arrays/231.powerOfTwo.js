n = 8

var isPowerOfTwo = function (n) {
    while (n > 1) {
        if (n % 2 == 0) { 
            n /= 2
        } else {
            break
        }
    }
    return n == 1
};

console.log(isPowerOfTwo(n));

console.log();