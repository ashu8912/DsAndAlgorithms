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
    let index=partition(arr,p,r);
    
    if(p<r)
    {
    quickSort(arr,p,index-1);
    quickSort(arr,index+1,r);
    }
    
return arr;
}
let arr=[90,6,1,9,2,44,99,63,21]
console.log(quickSort(arr));
console.log(arr);