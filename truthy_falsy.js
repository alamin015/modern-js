// There are six types of falsy values 
// Falsy values are : false, "", null, undefined, NaN, 0;


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