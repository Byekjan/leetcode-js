var nums = [0,1,2,2,3,0,4,2];
var val = 2;


let removeElement = (nums, val) => {
    let len = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== val){
            console.log(nums[i]);
            nums[len] = nums[i]
            len++;
        }
    }
    console.log(nums);
    return len;
};

console.log(removeElement(nums, val));