function addNaturalNumbers(n){
let sum=0;
    for(let i=0;i<n;i++)
{
    sum=sum+i;
}
return sum;
}
let t1=Date.now();
let sum=addNaturalNumbers(1000);
let t2=Date.now();
console.log("time",t2-t1);
console.log("sum",sum);