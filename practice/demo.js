import TreeNode from '../util/treeNode.js'

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


function perorderTraversal(node) {
  const res = []
  dfs(node)
  function dfs(node) {
    res.push(node.val)
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }
  }
  return res
}


function perorderIterated(node) {
  let stack = []
  let cur = node
  let res = []
  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    let temp = stack.pop()
    cur = temp.right
  }
  return res
}



function inorderTraversal(node) {
  const res = []
  dfs(node)
  function dfs(node) {
    if (node.left) {
      dfs(node.left)
    }
    res.push(node.val)
    if (node.right) {
      dfs(node.right)
    }
  }
  return res
}

function inorderIterated(node) {
  let stack = []
  let cur = node
  let res = []
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    let temp = stack.pop()
    res.push(temp.val)
    cur = temp.right
  }
  return res
}

function posorderTraversal(node) {
  const res = []
  dfs(node)
  function dfs(node) {
    if (node.left) {
      dfs(node.left)
    }
    if (node.right) {
      dfs(node.right)
    }

    res.push(node.val)
  }
  return res
}


function posorderIterated(node) {
  let stack = []
  let res = []
  let cur = node
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

