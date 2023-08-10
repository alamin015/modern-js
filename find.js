// Array.prototype.find()

const numbers = [1,2,3,4,5,6,7,8];
const result = numbers.find((value,index,fullArray) => {
    return value >= 5;
});

console.log(result);
//output will be 5;