function partition(arr){
let pivot=arr[0];
let index=0,temp;
for(let i=1;i<arr.length;i++)
{
    
    if(pivot>arr[i])
    {
     index++;
     if(index!==i)
     {temp=arr[index];
     arr[index]=arr[i];
     arr[i]=temp;
    }
}

        
    }
    temp=arr[index];
        arr[index]=arr[0];
        arr[0]=temp;
return index;
}
function quickSort(arr,p=0,r=arr.length-1){
    //let newArray=[];
    let temp;
    let index=partition(arr);
    if(p<r)
    {   quickSort(arr,p,index-1);
        quickSort(arr,index+1,r);
    }
return arr;
}
let arr=[8,6,1,9,2]
console.log(quickSort(arr));
console.log(arr);