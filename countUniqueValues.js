function countUniqueValues(arr)
{
    if(arr.length===0)
    {
        return 0;
    }
    let i=0,j=1,uniqueCounter=0;
    while(j<arr.length){
        console.log(i,j);
          if(arr[i]===arr[j])
          {i++;
          j++;}
          if(arr[i]!=arr[j])
          {
              uniqueCounter++;
              j++;   
              i++; 
        }
    }
    return uniqueCounter+1;
}
console.log(countUniqueValues([1,2,2,2,2,2,2,2,2,2,2,2,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,12,12,13]));