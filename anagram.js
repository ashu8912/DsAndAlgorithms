//using frequency counter method
function validAnagram(str1,str2){
 if(str1.length!==str2.length)
 {
     return false;
 }   
let frequencyObj1={};
let frequencyObj2={};
for(let value of str1)
{
frequencyObj1[value]=++frequencyObj1[value] || 1;
}
for(let value of str2)
{
    frequencyObj2[value]=++frequencyObj2[value] || 1;
}
for(let key in frequencyObj1)
{
    if(!(key in frequencyObj2))
    {
        return false;
    }
    if(frequencyObj1[key]!==frequencyObj2[key])
    {
        return false;
    }
}
return true;
}
console.log(validAnagram("ashuqwe","uhsawe"));