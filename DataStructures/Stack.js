/*
Stack is a data structure which follows the LIFO pattern

1.stack is used to store method calls
2.Undo/Redo tasks are implemented using stacks
3.Routing(libraries like react use it to store browsers history)
*/
//push and pop on arrays is a stack implementation
//unshift and shift is a stack implementaion
//Last in first out
//first in last out
/*

BigOhs of stacks 
insertion O(1)
deletion O(1)
search O(1)
access O(1)
*/
class Stack{
constructor()
{
    this.first=null;
    this.last=null;
    this.length=0;
}
push(val)
{
let newNode=new Node(val);
if(!this.first)
{
    this.first=newNode;
    this.last=this.first;
}
else{
    let temp=this.first;
    this.first=newNode;
    newNode.next=temp; 
}
this.length++;
return this.length;
}
pop(){
    if(!this.first)
    {
        
        return null;
    }
    let temp=this.first;
    this.first=temp.next;
    temp.next=null;
    --this.length;
    if(this.length===0)
    {
        this.last=null;
    }
    return temp.val;
}
}
class Node{
    constructor(val)
    {
        this.val=val;
        this.next=null;
    }
}
let stack=new Stack();
stack.push(12);
stack.push(13);
stack.push(42);
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
