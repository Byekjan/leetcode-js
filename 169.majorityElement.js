/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [2,3,2,2]

var majorityElement = function(nums) {
    const threshold = Math.floor(nums.length / 2);
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        console.log(`p1=> ` + value);
        map[value] = map[value] + 1 || 1;

        console.log(`p1 => ` + map[value]);
        if (map[value] > threshold)
            return value
    };
    return false;
};

console.log(majorityElement(nums));