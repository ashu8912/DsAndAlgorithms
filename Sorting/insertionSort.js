function insertionSort(arr)
{let j,key;
    for(let i=1;i<arr.length;i++)
    {
        key=arr[i];
    for(j=i;j>0;j--)
    {
        if(key<arr[j-1])
        {
             arr[j]=arr[j-1];
        }
        else break;
}
arr[j]=key;
}
    return arr;
}
console.log(insertionSort([65,12,90,48,-10,20,0,-1,34,42,65,65,90,48,120]));