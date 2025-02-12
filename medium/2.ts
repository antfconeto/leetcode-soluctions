import { ListNode, ListNodeController } from "../utils/ListNodes";


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let list1 = new ListNodeController(l1!)
    let list2 = new ListNodeController(l2!)
    
    list1!.revertListNode()
    
    let n1 = BigInt(list1?.getList().join('')!)

    list2?.revertListNode()
    let n2 = BigInt(list2?.getList().join('')!)
    let sum = (n1 + n2)
    console.log(sum)
    let arrayRes = sum.toString().split('').map(Number)
    let newList = new ListNodeController()
    for(let i = 0; i < arrayRes.length; i++){
        newList.push(arrayRes[i])
    }
    newList.revertListNode()
    return newList.head ? newList.head : null
};
