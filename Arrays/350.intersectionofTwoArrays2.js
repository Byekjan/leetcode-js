/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 nums1 = [4,4,9,5], nums2 = [9,9,8,4]

var intersect = function(nums1, nums2) {
    let res = [];
    for (var i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            console.log(nums1.indexOf(nums2[i]));
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
};

console.log(intersect(nums1, nums2));