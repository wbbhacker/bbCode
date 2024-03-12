

class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class linedList {
    constructor(arr){
        let head = null
        let curNode = head
        for(let i=0; i<arr.length; i++){
            const cur = new ListNode(arr[i])
            if(curNode){
                curNode.next = cur
                curNode = cur
            }else{
                head = cur
                curNode = cur
            }
        }
        return head
    }
}

export default linedList 