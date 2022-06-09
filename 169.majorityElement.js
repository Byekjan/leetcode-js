/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [2,2,2,2,2,1,2]

var majorityElement = function(nums) {
    const threshold = Math.floor(nums.length / 2);
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        map[value] = map[value] + 1 || 1;
        if (map[value] > threshold)
            return value
    };
    return false;
};

console.log(majorityElement(nums));