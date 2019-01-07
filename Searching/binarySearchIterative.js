function binarySearch(arr,num)
{
let start=0,end=arr.length-1,mid=Math.floor((start+end)/2),foundAt=undefined;
while(start<=end)
{if(arr[mid]<num)
    {

        mid++;
        start=mid;
    }else if(arr[mid]>num){
            mid--;
            end=mid;
    }
    else{
        foundAt=mid;
        break;
    }
}
if(foundAt)
{
    return foundAt;
}
else {
    return -1;
}
}
let arr=[1,2,5,6,7,8,9,10,45,64,78];
console.log(binarySearch(arr,90));