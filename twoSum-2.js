/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var array = [2,7,11,15];
 var target = 9;

const twoSum = (nums, target) => {
    let storage = {};
    for(let [index, num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
};

console.log(twoSum(array, target));
