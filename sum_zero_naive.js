//sum_zero_naive
function sum_zero_naive(arr){
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i]+arr[j]===0)
        {
            return [arr[i],arr[j]];
        }
    }
}
return [undefined,undefined];
}
console.log(sum_zero_naive([-3,-2,-1,0,1]));