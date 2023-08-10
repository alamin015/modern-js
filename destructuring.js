
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