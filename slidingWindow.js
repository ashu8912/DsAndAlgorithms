function max_sum(arr,num){
let maxSum=0;
let tempSum=0;
for(let i=0;i<num;i++)
{
    maxSum=maxSum+arr[i];
}
tempSum=maxSum;
for(let j=num;j<arr.length;j++)
{
tempSum=tempSum-arr[j-num]+arr[j];
maxSum=Math.max(maxSum,tempSum);

}
return maxSum;
}
console.log(max_sum([1,2,3,4,5,6,7],2));