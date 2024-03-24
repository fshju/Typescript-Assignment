import { log } from "console";

// Equality and Test 
console.log("Equality test with string: ","Hello" == "Hello");
// Inequality Test 
console.log("Inquality test with string: ",("Hi" as string) != "Hello");

// Tests Using the lower case function
console.log("Lower case function test: ", "HELLO".toLowerCase() ==="hello");

// Numerical test involving equality 
console.log("Equality test with numbers: ", 26 === 26);
// Numerical test involving and inequality
console.log("Inequality test with numbers: ", (26 as number) != 36);

// Greater than test
console.log("Greater Than Test: ", 15 > 10,);
// less than test
console.log("less Than Test: ", 5 > 10,);

// Greater than or equal to
console.log("Greater Than and equal to test: ", 15 >= 15);
// Less than or equal to
console.log("Less Than or equal to Test: ", 5 <= 10);

//Test using "and" operator
console.log("And operator test: ", 5===5 && 10 > 5);
//Test using "or" operator
console.log("Or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruits:string[] = ["Apple", "Banana", "Cherry"];
console.log('Test "Apple" in the array: ', fruits.includes("Apple"));
// Test whether an item is not in a array
console.log('Test "Nashpati" not in the array: ', !fruits.includes("Nashpati"));
