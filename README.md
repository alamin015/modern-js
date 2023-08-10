
## 1.Truthy and Falsy values:

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

 ## 4. Array findIndex method: 

 > [!IMPORTANT]
 > Array findIndex method use to find index number of specific value;

 ```js
 //findIndex method is almost same as find method but it gives us the index number;

const numbers = [23,233,22,55,45,46,47,0,2,0,4,6];

const result = numbers.findIndex((element,index,fullArray) => {
    return element===0;
});
console.log(result)
// output will be 7 because as we can see the value 0 is available in 7 index.
 ```

 > [!warning]
 > if there is same value available in a array, finIndex method gives us first match result and program stop executing.

 ## 5. Destructuring

> Destructuring is important term in javascript. We can realize of it's usecase when we work on react js.So every developer should keep clear concept about destructuring.

```js

// Object destructuring
// example 1 
const myObj = {
    country: "Bangladesh",
    language: "Bengali",
    area: "147570"
}

const {country,language,area} = myObj;
console.log(country,language,area);

// example 2;
const university1 = {
    name: "BSMRSTU",
    seat: 3000,
    masters: {
        name: "physics"
    }
    
}

const {masters: {name}} = university1;
console.log(name)

// example 3 

const student = {
    name: "alamin",
    age: 21,
    extra: {
        laptop: 1,
        mobile: 1,
    }
}
// here we can increase security because extra property may not be available
const {extra: {laptop} = {} } = student;
console.log(laptop)
```
Here we can increase security because extra property may not be available. That's why we should give default value which is empty object. if there is no extra property then output will be undefined but not error.