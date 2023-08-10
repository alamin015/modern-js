
# 1.Truthy and Falsy values:

 > [!IMPORTANT]
 > In Js falsy values are: false, "", null, undefined, NaN, 0.

```js
// In Js falsy values are: false, "", null, undefined, NaN, 0

// example 1

const name = "Alamin";
if(name){
    console.log("This block is executed when it is true")
}else {
    console.log("This block is executed when it is false")
}

//output will be: This block is executed when it is true


// example 2

const type = null;
if(type){
    console.log("This block is executed when it is true")
}else {
    console.log("This block is executed when it is false")
}

//output will be: This block is executed when it is false
```

## 2.Ternary operator: 

 > [!IMPORTANT]
 > Shorthand method of if else condition.

 ```js
 // example 

let age = 18;
let type = age>=18 ? "Adult" : "Child";
console.log(type)
// output will be Adult;
 ```

 ## 3. Array Find Method: 

 > [!important]
 > Array find method use to find a specific value which is exist in a array that is worked.

 ```js
 
 // Array.prototype.find()

const numbers = [1,2,3,4,5,6,7,8];
const result = numbers.find((value,index,fullArray) => {
    return value >= 5;
});

console.log(result);
//output will be 5;
 
 ```