function countBackward(num){
if(num===0)
return 0;
console.log(num);
num--;
countBackward(num);
}
console.log(countBackward(10));