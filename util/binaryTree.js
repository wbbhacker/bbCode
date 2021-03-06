import TreeNode from './treeNode.js'

function ArrayToTreeNode(arrayTree) {
  let len = arrayTree.length
  return create(0)
  function create(idx){
    let curValue = arrayTree[idx]
    let leftIdx = idx*2+1
    let rightIdx = idx*2+2
    if(leftIdx >= len && rightIdx > len) return new TreeNode(curValue,null,null) // 递归终止条件
    return new TreeNode(curValue,create(leftIdx),create(rightIdx))
  }
}


let arr = [1,2,3,4,5,6,7]
let binaryTree = ArrayToTreeNode(arr)



// Deep First Search  深度优先搜索

  // 前序遍历结果：[1,2,4,5,3,6,7]
function preoderTraversal(node){
  let res = []
  bfs(node)
  function bfs(node){

    res.push(node.val)

    if(node.left !== null){
      bfs(node.left)
    }
    if(node.right !== null){
      bfs(node.right)
    }

    
  }
  return res
}

// console.log(preoderTraversal(binaryTree))

  // 中序遍历结果: [4,2,5,1,6,3,7]

function inorderTraversal(node){
  let res = []
  bfs(node)
  function bfs(node){
    if( node.left !== null ){
      bfs(node.left)
    }
    res.push(node.val)
    if( node.right !== null ){
      bfs(node.right)
    }
  }
  return res
}
// console.log(inorderTraversal(binaryTree))

  // 后序遍历结果: [4,5,2,6,7,3,1]

function postorderTraversal(node){
  let res = []
  bfs(node)
  function bfs(node){
    if( node.left !== null ){
      bfs(node.left)
    }
    if( node.right !== null ){
      bfs(node.right)
    }
    res.push(node.val)
  }
  return res
}
// console.log(postorderTraversal(binaryTree))


  // 前序遍历结果：[1,2,4,5,3,6,7]
function preorderIterated(node){
  let stack = [node]
  let cur = null
  let res = []
  while(stack.length > 0){
    cur = stack.pop()
    
    res.push(cur.val)
    if(cur.right !== null){
      stack.push(cur.right)
    }
    if(cur.left !== null){
      stack.push(cur.left)
    }
  }
  return res
} 


function preorderIterated_o1(node){
  let stack = []
  let cur = node
  let res = []
  while(cur ||  stack.length > 0 ){
    while(cur){
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    let tmp = stack.pop()
    cur = tmp.right
  }
  return res
} 

// 中序遍历结果:[4,2,5,1,6,3,7]

function inorderIterated(node){
  let stack = []
  let cur = node
  let res = []
  while(cur ||  stack.length > 0 ){
    while(cur){
      stack.push(cur)
      cur = cur.left
    }
    let tmp = stack.pop()
    res.push(tmp.val)
    cur = tmp.right
  }
  return res
} 


// 后序遍历结果:   [4,5,2,6,7,3,1]

function posorderIterated(node){

  let stack = [{flag:0,node:node}]
  let res = []
  let cur
  while(stack.length>0){
    cur = stack.pop()
    console.log(cur)
    if(cur.flag === 1){
      res.push(cur.node.val)
    }else{
      stack.push({flag:1,node:cur.node})
      if(cur.node.right){
        stack.push({flag:0,node:cur.node.right})
      }
      if(cur.node.left){
        stack.push({flag:0,node:cur.node.left})
      }
    }
  }
  return res
} 

console.log(posorderIterated(binaryTree))