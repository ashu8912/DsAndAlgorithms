const arr=["ashu","alok","aniket"];
//inserting at the end takes constant time coz i don't have to refactor 
//other indices of the array
arr[arr.length]="himanshu";
console.log(arr);
//inserting at the beginning
//O(n) complexity because we have to refractor all the indices
//inserting at a particular position
let pos=1;

for(let i=arr.length;i>pos;i--)
{
    arr[i]=arr[i-1];
}
arr[pos]="Bipin";
console.log(arr);
