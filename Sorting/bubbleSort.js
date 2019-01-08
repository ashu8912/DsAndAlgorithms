function swap(arr,position1,position2)
{
    let temp;
    temp=arr[position1];
    arr[position1]=arr[position2];
    arr[position2]=temp;
}

/*
Its called the bubble Sort because at each iteration of the 
entire array the largest or the smallest "depending on whether
it is a increasing or decreasing sort" is bubbled at the end
we than move only till the second last element in the next iteration
coz we know the last element is at its correct place
[2,1,4,-10,6,0]
[1,2,-10,4,0,6] ist iteration
[1,-10,2,0,4,6] iind iteration we moved the inner loop one less
time the previous
[-10,1,0,2,4,6] iiird iteration
[-10,0,1,2,4,6] ivth iteration
[-10,0,1,2,4,6] no swaps occured here so we break out of the loop
*/
function bubbleSort(arr){
let isThereNoSwap;    
for(let i=0;i<arr.length;i++)
{isThereNoSwap=true;
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            swap(arr,j,j+1);
            isThereNoSwap=false;
        }
        
    }
    if(isThereNoSwap) break;
}
return arr;
}
console.log(bubbleSort([4,1,4,2,6,8,90,54,0,-10,40,90,60,32]));
