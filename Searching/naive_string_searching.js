//search for str2 in str1 and return count of occurrence
function naive_string_search(str1,str2)
{
let counter=0,matchCounter=0,i=0,j=0;
for(i=0;i<str1.length;i++)
{
    if(str1[i]===str2[0])
    {counter=0;
        for(j=0;j<str2.length;j++)
        {
          if(str2[j]!==str1[i+j])
          {
              break;
          }
        }
        if(j===str2.length)
        {
            matchCounter++;
        }
        
    }else{
        continue;
    }
    
}
return matchCounter;
}
console.log(naive_string_search("wowomgzomgomgomg","omg"));