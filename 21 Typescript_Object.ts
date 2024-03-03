// Write a program that creates a list containing these items.

// Data type of person object
interface person {
 name: string,
 age: number,
 nationality: string,
 Student: boolean
}
// Person object
let person:person ={
  name:"John",
  age:25,
  nationality:"American",
  Student:true
}
// Print person
console.log(person);

interface car{
    maker: string
    color:string
    automatic:boolean
}

// Car object
let car = { 
maker: 'Toyota',
color: 'red',
automatic: true
}

// Print car
console.log(car);