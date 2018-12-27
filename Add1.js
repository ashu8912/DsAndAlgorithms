function addNaturalNumbers(n)
{
    return (n*(n+1))/2;
}
let t1=Date.now();
let sum=addNaturalNumbers(10000000000000000);
let t2=Date.now();
console.log("Time",t2-t1);
console.log(sum);