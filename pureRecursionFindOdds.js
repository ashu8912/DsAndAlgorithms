function findOdds(arr){
let newArr=[];
if(arr.length===0)
return newArr;
if(arr[0]%2!==0)
{
    newArr.push(arr[0]);
}

newArr=newArr.concat(findOdds(arr.slice(1)));

return newArr;
}
console.log(findOdds([1,2,3,4,5,6,7]));