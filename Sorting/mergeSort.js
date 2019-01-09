function merge(arr1,arr2)
{console.log(arr1,arr2);
let newArr=[];
let m=0,n=0;
let combineSize=arr1.length+arr2.length;
arr1.push(Infinity);
arr2.push(Infinity);
for(let k=0;k<combineSize;k++)
{
if(arr1[m]<arr2[n])
{
    newArr[k]=arr1[m];
    m++;
}else if(arr1[m]>arr2[n]){
    newArr[k]=arr2[n];
    n++;
}else{
    newArr.push(arr1[m++]);
    newArr.push(arr2[n++]);
    k++;
}
}
return newArr;

}
let newArray=[];
function merge_sort(arr)
{   let mid=Math.floor((arr.length)/2);
    console.log(mid);
    if(arr.length<=1)
    {return arr;}
   let left=merge_sort(arr.slice(0,mid));
    let right=merge_sort(arr.slice(mid));
    return merge(left,right);      
}

console.log(merge_sort([4,1,-10,6,3,2]));