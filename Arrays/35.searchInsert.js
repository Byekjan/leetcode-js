nums = [1,3,5,6];
target = 10;


var searchInsert = function(nums, target) {
    let result = 0;
    for(let [index, num] of nums.entries()){
        if(num === target) {
            return index;
        } else if (num > target) {
            return index;
        } else {
            result = index;
        }
    }
    return result + 1;
};

console.log(searchInsert(nums, target));