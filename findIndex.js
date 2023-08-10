//findIndex method is almost same as find method but it gives us the index number;

const numbers = [23,233,22,55,45,46,47,0,2,0,4,6];

const result = numbers.findIndex((element,index,fullArray) => {
    return element===0;
});
console.log(result)
// output will be 7 because as we can see the value 0 is available in 7 index.