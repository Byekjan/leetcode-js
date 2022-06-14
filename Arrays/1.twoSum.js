/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var array = [2,7,11,15];
var target = 9;

var twoSum = function(nums, target) {
    const len = nums.length;
    const seen = new Map([[nums[0], 0]]);
    for (let i = 1; i < len; i++) {
        if (seen.has(target - nums[i])) {
            return [seen.get(target - nums[i]), i];
        } else {
            seen.set(nums[i], i);
        }
    }
};

console.log(twoSum(array, target));
