/**
 * @param {number[]} nums
 * @return {boolean}
 */

nums = [,2,3,1]

var containsDuplicate = function(nums) {
    map = {};
    for(let i = 0; i < nums.length; i++ ) {
        const value = nums[i];
        map[value] = map[value] + 1 || 1;
        if (map[value] >= 2)
            return true;
    }

    return false;
};

console.log(containsDuplicate(nums));