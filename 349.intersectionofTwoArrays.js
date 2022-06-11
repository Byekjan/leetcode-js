nums1 = [1,2,2,1], nums2 = [2,2]

var intersection = function (nums1, nums2) {
    const set1 = new Set(nums1);
    console.log(typeof(set1));
    console.log(set1);
    const set2 = new Set(nums2);
    const arr = [];

    for (let val of set1) {
        if (set2.has(val)) {
            arr.push(val)
        }
    }
  
    return arr;
};

console.log(intersection(nums1, nums2));