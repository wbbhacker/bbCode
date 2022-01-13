import TreeNode from './treeNode.js'

function ArrayToTreeNode(arrayTree) {
  let len = arrayTree.length
  return create(0)
  function create(idx) {
    let curValue = arrayTree[idx]
    let leftIdx = idx * 2 + 1
    let rightIdx = idx * 2 + 2
    if (leftIdx >= len && rightIdx > len) return new TreeNode(curValue, null, null) // 递归终止条件
    return new TreeNode(curValue, create(leftIdx), create(rightIdx))
  }
}

// 树的子结构
let A = ArrayToTreeNode([4,2,3,4,5,6,7,8,9])
let B = ArrayToTreeNode([4,8,9])
console.log(isSubStructure(A,B))
console.log(A)
function isSubStructure(A, B) {
  if(B === null || A === null) return false;
  const bStack = []
  let aStack = []
  let acur = A
  let bcur = B
  let stack = []
  while( acur || aStack.length > 0){
    while (acur) {
        if (acur.val === bcur.val) { 
          stack.push(acur)
        }
        aStack.push(acur)
        acur = acur.left
      }
      if(aStack.length > 0){
          acur = aStack.pop()
          acur = acur.right
      }
  }
  let flag = true 
  while (stack.length > 0) {
    acur = stack.pop()
    while( (bcur || bStack.length > 0) && flag ){
        while(bcur !== null ){
          if (acur === null) { 
            flag = false
            break;
          }
          if (bcur.val !== acur.val) { 
            flag = false
            break;
          }
            aStack.push(acur)
            bStack.push(bcur)
            bcur = bcur.left
            acur = acur.left
        }
        if(bStack.length > 0 ){
            acur = aStack.pop()
            bcur = bStack.pop()
            bcur = bcur.right
            acur = acur.right
        }
    }
    if (flag) { 
      return true
    }
  }
  return false
};