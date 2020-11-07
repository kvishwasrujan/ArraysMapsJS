let numberArray = new Array();
numberArray.push(2);
numberArray.push(7);
numberArray.push(-9);
console.log(numberArray);
let sum =0;
function findSum(sum,num){
    sum+=num;
    return sum;
}
numberArray.reduce(findSum,0);
console.log("Sum is "+sum);