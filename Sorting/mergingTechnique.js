function mergingTechnique(arr1,arr2)
{
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



console.log(mergingTechnique([1,3,6],[0,3,4,7]));