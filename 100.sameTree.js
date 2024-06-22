
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

p = [2, 2, 2], q = [2,2,3]

var isSameTree = function(p, q) {
    if(p == null && q == null){
        return true;
    } 
    if((p == null && q != null) || (p != null && q == null)) {
        return false;
    } 
    if( p.val != q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

console.log(isSameTree(p, q));