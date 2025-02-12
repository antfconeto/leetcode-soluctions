export class ListNode{
    val: number;
    next: ListNode | null;
    constructor(val: number, next: ListNode | null = null){
        this.val = val;
        this.next = next;
    }

}

export class ListNodeController{
    head:ListNode | null
    counter:number = 0
    constructor(node:ListNode | null = null){
        this.head = node
        if(node){
            this.generateCounter(node)
        }
    }
    push(element:number):void{
        let newNode = new ListNode(element)
        if(this.head == null){
            this.head = newNode
        }else{
            let current = this.head;
            while(current.next){
                current = current.next!
            }
            current.next = newNode
        }
        this.counter++
    }

    getElementAt(index:number):number | null{
        if(index > this.counter - 1 ){
            throw new Error(`The list node no has a element in index ${index}`)
        }
        if(this.head === null){
            return null
        }
        let current = this.head
        for(let i = 0; i < index; i ++){
             current = current.next!
        }
        return current?.val
    }

    getListSize():number{
        if(this.head === null){
            return 0
        }
        return this.counter
    }

    pushElementAt(element:number, index:number):void{
        if(index == 0){
            this.head = new ListNode(element, this.head)
            this.counter++
            return;
        }
        if(this.head === null && index !== 0){
            throw new Error(`Unable to add a element in index ${index}, because list has ${this.counter} elements`)
        }
        let current = this.head
        for(let i = 0; i < index; i++){
            current = this.head!.next
        }
        this.head!.next = new ListNode(element, this.head)
        this.counter++
        return;
    }
    getList():number[]{
        let list:number[] = []
        let current:any = this.head
        if(this.head === null){
            return []
        }
        for(let i = 0; i < this.counter; i++){
            list.push(current!.val)
            current = current?.next
        }
        return list
    }

    generateCounter(node:ListNode){
        if(!node.next){
            this.counter = 1
        }else{
            let current = node
            this.counter++
            while(current.next){
                this.counter++
                current = current.next
            }
        }


    }

    revertListNode(){
        if(this.head === null){
            return
        }
        let newList = new ListNodeController()
        for(let i = this.counter - 1; i >= 0; i--){
            newList.push(this.getElementAt(i)!)
        }
        this.head = newList.head
    }
}