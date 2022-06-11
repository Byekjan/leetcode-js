n = 4;

var climbStairs = function(n) {
    var dp = [0, 1];
    for (var i = 0; i < n; i++) {
        dp = [dp[1], dp[0] + dp[1]];
        console.log(dp);
    }
    return dp[1];
};

console.log(climbStairs(n));