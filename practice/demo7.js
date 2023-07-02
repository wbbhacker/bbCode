
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function crateListNode(arr) {
    const result = new ListNode()
    let cur = result
    for (let i = 0; i < arr.length; i++) {
        cur.val = arr[i]
        cur.next = arr[i + 1] === undefined ? null : new ListNode()
        cur = cur.next
    }
    return result
}

const L1 = crateListNode([9, 9, 9, 9, 9, 9, 9])
const L2 = crateListNode([9, 9, 9, 9])
var addTwoNumbers = function (l1, l2) {
    const node = new ListNode()
    let cur = node
    let w = 0
    while (l1 !== null || l2 !== null) {
        const l1Value = l1 === null ? 0 : l1.val
        const l2Value = l2 === null ? 0 : l2.val

        if (l1Value + l2Value + w >= 10) {
            cur.val = l1Value + l2Value + w - 10

            w = 1
        } else {
            cur.val = l1Value + l2Value + w

            w = 0
        }
        if (l1 === null && l2 === null) {
            cur.next = null
        } else {
            cur.next = new ListNode()
            cur = cur.next
        }
        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next
    }

    return node
};

const res = addTwoNumbers(L1, L2)
console.log(res)

