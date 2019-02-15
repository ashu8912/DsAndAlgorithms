class Node{
    constructor(val){
        this.val=val;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val)
    {
        let newNode=new Node(val);
        if(!this.head)
        {
            this.head=newNode;
            this.tail=this.head;
        }else{
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        
        let temp=this.tail;   
        if(!this.head)
        {
            return undefined;
        }
        
        else
        if(this.length===1)
        {
            this.head=null;
            this.tail=null;
        }
        else{
       this.tail.prev.next=null;
       this.tail=temp.prev;
       temp.prev=null;
     }
     this.length--;
     return temp;   
    }
    shift(){
        let temp=this.head;
        if(!this.head)
        {
            return undefined;
        }
        if(this.length===1)
        {
            this.head=null;
            this.tail=null;
        }else
        {this.head=temp.next;
        this.head.prev=null;
        temp.next=null;
        }
        this.length--;
        return temp;
    }
    unshift(val){
     let newNode=new Node(val);
     if(!this.head)
     {
         this.head=newNode;
         this.tail=this.head;
     }else{
         this.head.prev=newNode;
         newNode.next=this.head;
         this.head=newNode;
     }
     this.length++;
     return newNode;
    }
    get(index){
        if(index>=this.length || index<0) return null;
        let midIndex=Math.floor(this.length/2);
        let counter,current;
        if(index<=midIndex)
        {
           counter=0;
           current=this.head;
           while(counter!=index)
           {
               counter++;
               current=current.next;
           } 
        }else{
            
          counter=this.length-1;
          current=this.tail;
          while(counter!=index)
          {
           counter--;
           current=current.prev;
          }
          
        }
        return current;
    }
}
let list=new DoublyLinkedList();
list.push("ashu");
list.push("ghildiyal");
list.push("champ");
list.shift();
list.unshift("harry potter");
console.log(list.get(1));