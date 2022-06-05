nums = [-10,-3,0,5,9];

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums, start = 0, end = nums.length-1) {
    // console.log(start);
    // console.log(end);
    if(start>end){                        // if start>end means left tree or right subtree is not possible so return null
        return null;
    }
    let mid = Math.floor((start+end)/2);       // get the mid index
    let root = new TreeNode(nums[mid]);        // make a new node   2 
    // console.log(root);
    root.left = sortedArrayToBST(nums,start,mid-1);    // now recursively generate left subtree
    // console.log(root.left);
    root.right = sortedArrayToBST(nums,mid+1,end);     // similarly generate right subtree
    // console.log(root.right);
    return root;    // recursively parse through array
};


let  arr = sortedArrayToBST(nums);

console.log(arr);
var my_obj_str = JSON.stringify(arr);
console.log(my_obj_str);