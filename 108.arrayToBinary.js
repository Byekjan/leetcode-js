nums = [-10,-3,0,5,9];

function TreeNode(val) {
    console.log(val);
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums, start = 0, end = nums.length-1) {
    if(start>end){                        // if start>end means left tree or right subtree is not possible so return null
        return null;
    }
    let mid = Math.floor((start+end)/2);       // get the mid index
    let root = new TreeNode(nums[mid]);        // make a new node
    root.left = sortedArrayToBST(nums,start,mid-1);    // now recursively generate left subtree
    root.right = sortedArrayToBST(nums,mid+1,end);     // similarly generate right subtree
    return root;    // recursively parse through array
};


console.log(sortedArrayToBST(nums));

