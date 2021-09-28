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


let arr = [1, 2, 3, 4, 5, 6, 7]
let binaryTree = ArrayToTreeNode(arr)

console.log(binaryTree)

// Deep First Search  深度优先搜索
/****递归****/
// 前序遍历结果：[1,2,4,5,3,6,7]
function preorderTraversal(node) {
  let res = []
  bfs(node)
  function bfs(node) {
    res.push(node.val)
    if (node.left !== null) {
      bfs(node.left)
    }
    if (node.right !== null) {
      bfs(node.right)
    }
  }
  return res
}

// console.log(preoderTraversal(binaryTree))

// 中序遍历结果: [4,2,5,1,6,3,7]

function inorderTraversal(node) {
  let res = []
  bfs(node)
  function bfs(node) {
    if (node.left !== null) {
      bfs(node.left)
    }
    res.push(node.val)
    if (node.right !== null) {
      bfs(node.right)
    }
  }
  return res
}
// console.log(inorderTraversal(binaryTree))

// 后序遍历结果: [4,5,2,6,7,3,1]

function postorderTraversal(node) {
  let res = []
  bfs(node)
  function bfs(node) {
    if (node.left !== null) {
      bfs(node.left)
    }
    if (node.right !== null) {
      bfs(node.right)
    }
    res.push(node.val)
  }
  return res
}
// console.log(postorderTraversal(binaryTree))



/****迭代****/

// 前序遍历结果：[1,2,4,5,3,6,7]
// 两种遍历的本质不同是：切换到右字树的机制不一样
function preorderIterated(node) {
  let stack = [node]
  let cur = null
  let res = []
  while (stack.length > 0) {
    cur = stack.pop()

    res.push(cur.val)
    if (cur.right !== null) {
      stack.push(cur.right)
    }
    if (cur.left !== null) {
      stack.push(cur.left)
    }
  }
  return res
}
function preorderIterated1(node) {
  let stack = []
  let cur = node
  let res = []
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return res
}
console.log(preorderIterated1(binaryTree))



// 中序遍历结果:[4,2,5,1,6,3,7]
function inorderIterated(node) {
  let stack = []
  let cur = node
  let res = []
  while (cur || stack.length > 0) {
    while (cur) {
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
// 方法1. 先头、右、左遍历，保存在栈中，之后输出栈 左、右、头。tips：先遍历、在输出
// 方法2.  tips：边遍历，边输出。  
// 方法3. 链表实现
function posorderIterated(node) {

  let stack = [{ flag: 0, node: node }]
  let res = []
  let cur
  while (stack.length > 0) {
    cur = stack.pop()
    if (cur.flag === 1) {
      res.push(cur.node.val)
    } else {
      stack.push({ flag: 1, node: cur.node })
      if (cur.node.right) {
        stack.push({ flag: 0, node: cur.node.right })
      }
      if (cur.node.left) {
        stack.push({ flag: 0, node: cur.node.left })
      }
    }
  }
  return res
}

function posorderIterated1(node) {
  let stack = [node]
  let res = []
  let cur = null
  while (stack.length > 0) {
    cur = stack.pop()
    res.push(cur.val)
    if (cur.left) {
      stack.push(cur.left)
    }
    if (cur.right) {
      stack.push(cur.right)
    }
  }
  return res.reverse()
}

function posorderIterated2(node) {
  let stack = []
  let cur = node
  let res = []
  let prev = null
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    let temp = stack.pop()
    if (!temp.right || temp.right === prev) {
      res.push(temp.val)
      prev = temp
    } else {
      stack.push(temp)
      cur = temp.right
    }
  }
  return res
}

// console.log(posorderIterated(binaryTree))
// console.log(posorderIterated1(binaryTree))
// console.log(posorderIterated2(binaryTree))