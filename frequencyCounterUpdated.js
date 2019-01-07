//** is used for exponents like a**b means a power b


function same(arr1,arr2){
let frequencyObj1={};
let frequencyObj2={};
for(let value of arr1)
{
    frequencyObj1[value]=++frequencyObj1[value] || 1;
}
for(let value of arr2)
{
    frequencyObj2[value]=++frequencyObj2[value] || 1;
}
console.log(frequencyObj1,frequencyObj2);
for(let key in frequencyObj1)
{
    if(!(key**2 in frequencyObj2))
    {console.log("inside",key*2,key*2 in frequencyObj2);
        return false;
    }
    if(frequencyObj1[key**2]!==frequencyObj2[key])
    {
        return false;
    }
}
return true;
}
console.log(same([1,2,1],[1,4,1]));