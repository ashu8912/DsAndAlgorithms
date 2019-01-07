function charsInString(str)
{
    let countHolderObj={};
    //traverse the string and start placing each character in an object
    //only lowercase alphanumeric are allowed 
    //y and Y are considered same so it should be {y:2}
    //all the blankSpaces should not be considered 
    //traversing function
    const regex=new RegExp("^[a-z0-9]*$");
    for(let i=0;i<str.length;i++)
    {let char=str[i].toLowerCase();
        if((regex.test(str[i])))
    {
    countHolderObj[char]=countHolderObj[char]?countHolderObj[char]+1:1;
    }   
    }
    return countHolderObj;
}
console.log(charsInString("My name is Ashu 123 ____ $"))