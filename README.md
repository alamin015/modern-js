# About Me: 
- Name: Al-amin
- I am a student as well as trying to learn web development.
- From Sunamganj, Bangladesh.

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