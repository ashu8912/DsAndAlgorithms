


function breadthFirstTraversal(bst)
{
var queue=[],visited=[],temp=bst.root;
queue.push(temp);
while(queue.length)
{
    temp=queue.shift(); 
    visited.push(temp);
    if(temp.left)
     {
       queue.push(temp.left);
     }
     if(temp.right)
     {
         queue.push(temp.right);
     }
}
return visited;
}
class Node{
    constructor(val)
     {
         this.val=val;
         this.left=null;
         this.right=null;
    }
}
class BinarySearchTree{
    constructor()
    {
        this.root=null;
    }
    insert(val)
    {
        let newNode=new Node(val);
        if(!this.root)
        {
            this.root=newNode;
            return this;
        }
        let temp=this.root;
        
        while(temp)
        {
        if(temp.val===val)
        {
            return undefined;
        }    
        if(temp.val>val)
        {
            //go left
            if(!temp.left)
            {
            temp.left=newNode;   
            break; 
            }
            else
            {
                temp=temp.left;
            }
            
        }
        else if(temp.val<val)
        {
            //go right
            if(!temp.right)
            {
                temp.right=newNode;
                break;
            }
            else
            {
                temp=temp.right;
            }
        }
    }
return this;
    }
    find(val)
    {
    if(!this.root)
    {
        return false;
    }
    
    let temp=this.root,found=false;
    while(!found && temp)
    {
        if(temp.val>val)
        {
            //move left
        temp=temp.left;
        
        }
        else if(temp.val<val)
        {
            //move right
            temp=temp.right;
            
        }else if(temp.val===val)
        {
            found=true;
        }
    }
    if(!found) return false;
    return temp;

    }
}
var bst=new BinarySearchTree();
bst.insert(12);
bst.insert(6);
bst.insert(4);
bst.insert(1);
bst.insert(10);
bst.insert(41);

console.log(breadthFirstTraversal(bst));