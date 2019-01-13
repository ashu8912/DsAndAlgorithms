function getDigitAlternate(num,whatPositionDigit){
let number=num.toString();
let length=number.length-1;
if(whatPositionDigit>length)
{
    return 0;
}
return parseInt(number[length-whatPositionDigit]);
}
function getDigit(num,whatPositionDigit){
return Math.floor(Math.abs(num)/Math.pow(10,whatPositionDigit))%10;
}
console.log(getDigit(1,9));
