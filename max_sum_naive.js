function max_sum_naive(arr,num){
let maxSum=-Infinity;
let sum=0;
for(let i=0;i<arr.length-num+1;i++)
{
    for(let j=i;j<num+i;j++)
    {
       sum=sum+arr[j];
    }
    if(sum>maxSum)
    {
        maxSum=sum;
    }
    sum=0;
}
return maxSum;
}
console.log(max_sum_naive([1,2,3,4,5,8,6,7],2));