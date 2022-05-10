class LinkedList {
    constructor (data){
        this.data = data
        this.next = null
    }
}
let head = new LinkedList(10)
let temp1 = new LinkedList(20)
let temp2 = new LinkedList(30)
let temp3 = new LinkedList(40)
let temp4 = new LinkedList(50)


// head.next = temp1
// temp1.next=temp2

// // insearting first node in the beginning
// temp3.next = head
// head = temp3
// // inserting node in the between the node
// temp4.next=temp2
// temp1.next=temp4

// let temp = head
// while(temp != null){
//     console.log(temp.data)
//     temp=temp.next
// }

// function linkedistLoop() {
//     // LinkedListLopp exaple
//     head.next = temp1 
//     temp1.next = temp2 
//     temp2.next = temp3 
//     temp3.next = temp4
//     temp4.next=temp1 

//     let slow =head
//     let fast = head
//     while(fast && fast.next){
//         slow = slow.next
//         fast = fast.next.next
//         if(slow==fast) return true
//     }
// }
// console.log(linkedistLoop())

// function linkedListMiddle() {
    // head.next = temp1
    // temp1.next = temp2
    // temp2.next = temp3
    // temp3.next = temp4
//     let slow = head
//     let fast = head
//     while(fast.next!=null && fast!=null){
//         slow = slow.next
//         fast = fast.next.next
//     }
//     console.log(slow.data)

    

// }
// linkedListMiddle()

// function reverseTheLinkedList() {
//     head.next = temp1
//     temp1.next = temp2
//     temp2.next = temp3
//     temp3.next = temp4

//     let current = head
//     let prev = null
//     let next 
//     while(current){
//         next = current.next
//         console.log(current)
//         current.next = prev
//         prev = current
//         current = next
//     }
//     return head = prev
// }
// reverseTheLinkedList()

// 10->20->30->40->50->null
// null<-10<-20<-30<-40<-50


