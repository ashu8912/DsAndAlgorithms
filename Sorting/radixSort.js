function countDigit(num){
    if(num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function findNumOfMaxNumDigits(arr){
let max=countDigit(arr[0]);
for(let i=0;i<arr.length;i++)
{ let digitCount=countDigit(arr[i]);
    if(max<digitCount)
    {
        max=digitCount
    }
}
return max;
}
function getDigit(num,whatPositionDigit){
    return Math.floor(Math.abs(num)/Math.pow(10,whatPositionDigit))%10;
    }
function radixSort(nums){
let max_digits=findNumOfMaxNumDigits(nums);
for(let k=0;k<max_digits;k++)
{
    let buckets=Array.from({length:10},()=>[]);
    for(let i=0;i<nums.length;i++)
    {
        let digit=getDigit(nums[i],k);
        buckets[digit].push(nums[i]);
    }
    nums=[].concat(...buckets);
}
return nums;
}
console.log(radixSort([11,22,341,456,210]));