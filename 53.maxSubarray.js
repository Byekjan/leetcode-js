nums = [-2,1,-3,4,-1,2,1,-5,4];

var maxSubArray = function(nums) {
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {

        console.log(nums[i] + '<--->' + nums[i] + nums[i - 1]);
        console.log(nums[i] + '<--->' + (nums[i] + nums[i - 1]));
        
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        console.log(nums[i]);
        result = Math.max(result, nums[i]);
    }

    return result;
};

console.log(maxSubArray(nums));