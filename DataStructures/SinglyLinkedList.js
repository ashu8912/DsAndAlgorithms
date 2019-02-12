//it is a collection of node where the node contains 
//value and a pointer to the next node in the list
//we have to remember the head,tail and the length
//of the list in order to traverse the list
//the tail always points to null

//The Node BluePrint
class Node{
    constructor(val)
    {
        this.val=val;
        //next is the pointer that stores the address
        //of the next node
        this.next=null;
    }
}
//SinglyLinkedList
class SinglyLinkedList{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        const newNode=new Node(val);
     if(this.head===null)
     {
       //meaning list is empty
       this.head=newNode;
       this.tail=this.head;
       
     }else{
        this.tail.next=newNode;
        this.tail=newNode;
     }
     this.length++;
     return this;
    }
    pop(){
     if(!this.head)
     {
         return undefined;
     }
     let pre;
     let current=this.head;
     pre=current;
     while(current.next)
     {
        pre=current;
        current=current.next;
      
    }
     pre.next=null;
     this.tail=pre;
     this.length--;
     if(this.length===0)
     {
         this.head=null;
         this.tail=null;
     }
     return current;
    }
    //delete from the beginning
    shift(){
        if(!this.head)
        {
            return undefined;
        }
        let temp=this.head;
        this.head=temp.next;
        this.length--;
        if(this.length===0)
        {
            this.tail=null;
        }
        return temp;
    }
    //insert at the beginning
    unshift(val)
    {
        let newNode=new Node(val);
        if(!this.head)
        {
            this.head=newNode;
            this.tail=this.head;
        }
        else{
        newNode.next=this.head;
        this.head=newNode;
        }
        this.length++;
        return newNode;
    }
    get(index)
    {
        if(index<0 || this.length<index)
        {
            return null;
        }
        let counter=0;
        let current=this.head;
        while(counter<index)
        {
            current=current.next;
            counter++;
        }
        return current;
    }
    // traverse(){
    //     let current=this.head;
    //     while(current)
    //     {
    //     current=current.next;
    //     }
    // }
}
const singlyLinkedList=new SinglyLinkedList();
singlyLinkedList.push("ashu");
singlyLinkedList.push("ghildiyal");
singlyLinkedList.push("hello");
singlyLinkedList.push("champ");

console.log(singlyLinkedList.unshift("hero"));
console.log((singlyLinkedList.get(2)));
//singlyLinkedList.traverse();
