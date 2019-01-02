//my ugly solution for comparing two arrays
//for squares of first array to exist in second array
//with same frequency
//[1,2,1] [4,4,1] should return false coz frequency of squares is not same
//[1,2,3] [4,1,9] return true
//[1,2,3] [1,9] return false


//what i have done is maintained a lookup array
//where i put value that got matched from j position in array
//to ith 
//Placing the element at jth position in lookup
//array helps me determine not counting the same element again
//coz if i dont do that i would face a problem of 
//not handling frequency of elements
function same(arr1,arr2)
{let count=0;
let lookup=arr1.map((num)=>-1);
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(lookup[j]!==arr1[i])
            {if(Math.pow(arr1[i],2)===arr2[j])
            {console.log(arr1[i],arr2[j]);
                lookup[j]=arr1[i];
             count++; 
             break;  
            }}
            else{
                continue;
            }
        }
    }

console.log(count);
    if(count===arr1.length)
    return true;
    else
    return false;
}
console.log(same([1,2,3],[4,1,9]));