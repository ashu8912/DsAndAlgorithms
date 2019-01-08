function swap(arr,position1,position2)
{
    let temp;
    temp=arr[position1];
    arr[position1]=arr[position2];
    arr[position2]=temp;
}
/*
selection sort is similar to bubble sort but here the smallest
one is put at the beginning at each iteration of the entire array
-----we start from the first element we compare it with rest of the
array if we found some other min we set minimum to that variable
and start comparing that min from the remaining array
at the end we swap the min from the position we started
*/

function selectionSort(arr){
let minPos=0;
    for(let i=0;i<arr.length;i++)
{min=arr[i];
    for(let j=i+1;j<arr.length;j++)
    {
        if(min>arr[j])
        {
            min=arr[j];
            minPos=j;
        }
    }
    if(i!==minPos) swap(arr,i,minPos);
    
}
return arr;
}
console.log(selectionSort([3,1,2,3,4,6,78,8,-10,0]));