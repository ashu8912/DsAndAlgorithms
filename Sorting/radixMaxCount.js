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
console.log(findNumOfMaxNumDigits([1111,2,3]))