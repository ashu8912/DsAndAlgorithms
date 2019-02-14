function partition(arr,p,r){
let pivot=arr[p];
let index=p,temp;
for(let i=p+1;i<=r;i++)
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
        arr[index]=arr[p];
        arr[p]=temp;
return index;
}
function quickSort(arr,p=0,r=arr.length-1){
    
    if(p<r)
    {
    let index=partition(arr,p,r);
    quickSort(arr,p,index-1);
    quickSort(arr,index+1,r);
    }
    
return arr;
}
let arr=[32,1,2,34,21,89,21,21,42,42,54,63];
console.log(quickSort(arr));