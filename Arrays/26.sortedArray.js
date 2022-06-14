nums = [1,1,2];

var removeDuplicates = function(nums) {
    let len = 1;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i - 1] !== nums[i]){
            nums[len++] = nums[i]; 
        }
    }

    return len;
};

console.log(removeDuplicates(nums));