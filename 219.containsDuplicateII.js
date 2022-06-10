/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Integer nums array bolon integer k utaguud ogogdson . Хэрэв массивт nums[i] == nums[j] болон abs(i - j) <= k гэсэн хоёр ялгаатай i ба j индекс байгаа бол үнэнийг буцаана. 


var nums = [1,2,3,1,2,3];
var k = 2;

var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        console.log(map.get(nums[i]));
        // Check if the difference betweend duplicates is less than k
        if (i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

console.log(containsNearbyDuplicate(nums, k));