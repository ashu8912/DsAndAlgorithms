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

let tree=new BinarySearchTree();
tree.insert(12);
tree.insert(15);
tree.insert(10);
tree.insert(2);
tree.insert(41);
tree.insert(1);
console.log(tree.find(41));
//console.log(tree);

/*
BigOhs for insertion and searching a item in a BST is 
O(log2 n)=average and best 
because if we double the no.of nodes the no.of steps 
increases by 1 
but for worst case it is not always true
because there are some bst configuration 
that doesn't give logn time complexity
   ex-:    (1)
             (17)
               (19) 
                 (25)
                   (42)
                     (63)
 inserting and searching in the above bst increases as 
 we increase the no.of node                    
*/