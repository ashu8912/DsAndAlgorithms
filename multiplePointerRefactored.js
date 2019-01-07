function sum_zero_refactored(arr){
let i=0,j=arr.length-1;
    while(i<j)
{
    if(arr[i]+arr[j]<0)
    i++;
    else
    if(arr[i]+arr[j]>0)
    j--;
    else
    return [arr[i],arr[j]];
}
return [undefined,undefined];
}
console.log(sum_zero_refactored([-3,-2,0,1]));