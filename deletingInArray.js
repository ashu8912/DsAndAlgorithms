const arr=["ashu","ajay","sam","max"];
//deleting at last
//O(1) complexity
// arr.length=arr.length-1;
// console.log(arr); 
//deleting the beginning element
//O(n) complexity 
// for(let i=0;i<arr.length;i++)
// {arr[i]=arr[i+1]}
// arr.length=arr.length-1;
//deleting at particular position
let pos=1;
for(let i=pos;i<arr.length;i++)
{
    arr[i]=arr[i+1];
}
arr.length=arr.length-1;
console.log(arr);