/**A binary Search works on a sorted array 
 * we use the divide and conquer approach to find the 
 * required element in the sorted array
 * we start from middle look whether the middle is
 * greater,less or equal and take decision on each condition
 * if its greater we move toward the left half to search the number 
 * if less we move toward the right half 
 * we go until the low end pointer is less or equal to the 
 * high end pointer Because if it gets higher it means 
 * the high and low pointer have now crossed each other 
 * and thus there is no region remaining in array where 
 * element can be found
 */






//num is number to search in sorted array arr
function binarySearch(arr,p,r,num){
//doesnot matters whether you use ceil or floor
    let mid=Math.ceil((p+r)/2);

if(p<=r)
{
if(arr[mid]<num)
{
    return binarySearch(arr,mid+1,r,num);
}
else if(arr[mid]>num)
{
    return binarySearch(arr,p,mid-1,num);
}
else {
    
    return "element found at "+mid;
}
}
return "element not found";
}
let arr=[1,2,5,6,7,8,9,10,45,64,78];
console.log(binarySearch(arr,0,arr.length-1,78));