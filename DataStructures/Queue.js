/*
Queue is a data strucutre which follows FIFO pattern
First In First Out

unlike stacks when queues are implemented with array
using either "shift" or "push"
"pop" or "unshift"
gives us O(n) times 
whereas in stacks the pair "push" and "pop"
gave O(1)

use=>
1.Uploading resources
2.Background tasks
3.printing / Task Processing
*/
/*
Inserting in queue is called enqueue
Deletion from queue is called dequeue
*/
class Node{
    constructor(val)
    {
        this.val=val;
        this.next=null;
    }
}
class Queue{
   constructor()
{
this.first=null;
this.last=null;
this.length=0
}
enqueue(val)
{
let newNode=new Node(val);
if(!this.first)
{
    this.first=newNode;
    this.last=newNode;
}
else{
    this.last.next=newNode;
    this.last=newNode;
}
return ++this.length;
}
dequeue()
{
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
return temp;
}
}

let queue=new Queue();

queue.enqueue(42);
queue.enqueue(12);
queue.enqueue(22);
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue)
