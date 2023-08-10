
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


// Array destructuring

const numbers = [1,2,4,9,5,6,7];

const [a,b] = numbers;
console.log(a,b);

// again
 const [,two,,,,six] = numbers;
 console.log(two,six);

 // nested

 const money = [23,[400,500,655],22,3,4,555];

 const [,[,fiveH]] = money;
 console.log(fiveH);

 // useCase

let numb1 = 10;
let numb2 = 20;

[numb2,numb1] = [numb1,numb2]
console.log(numb1,numb2)