// https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    let dp = new Array(n+1).fill(0);
    dp[1] = 1; // to climb 1 stair only one way
    dp[2] = 2; // to climb 2 stairs 2 ways
    
     /** follows a pattern like fibonacci series
     * to reach a particular step the previous step would be previous(i-1th) or 
     * previous to previous (i-2th), we sum up ways of reaching both of those
     */
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp [i-2];
    }
    return dp[n];
};