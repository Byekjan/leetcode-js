/**
 * @param {number[]} nums
 * @return {boolean}
 */

nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    if(nums.length === 1) return false
    
    let hash = {}
    for(let num of nums){
        if(num in hash) return true 
            
        hash[num] = true
    }
    return false
};

console.log(containsDuplicate(nums));