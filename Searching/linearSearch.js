function linearSearchIterative(arr,item)
{
for(let i=0;i<arr.length;i++)
{
    if(arr[i]===item)
    {return i;}
}
return -1;
}
console.log(linearSearchIterative(["ashu","amit","sachin","pankaj"],"sachin"));
