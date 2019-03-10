         /*   10
           6     12
         3   8  11  13
 first pick the node you are on and than traverse its left 
 and than traverse its right


*/
function preOrderDepthFirst(bst){
var visited=[];
var temp=bst.root;
function helper(node){
visited.push(node);
if(node.left)
{
    helper(node.left);
}if(node.right)
{
    helper(node.right);
}
}
helper(temp);
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
bst.insert(10);
bst.insert(5);
bst.insert(1);
bst.insert(14);
bst.insert(13);
bst.insert(16);
console.log(preOrderDepthFirst(bst));