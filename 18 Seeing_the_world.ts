// Store the location in a array. Make sure the array is not an alphabetical order.
let places :string[] = ['Italy','Germany','Agra','Eifel tower','Times square'];

// Print your array in its original order.
console.log('Orignal ' + places);

// Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + [...places].sort());

// show that your array is still in its original  order by printing it.
console.log('Orignal ' + places);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy ' + [...places].sort().reverse());

// show that your array is still in its original  order by printing it again.
console.log('Orignal ' + places);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orginal ' + places.reverse());

// Reverse the oder of your list again. Print the list to show its back to its original order.
console.log('Orignal ' + places.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orignal ' + places.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Orignal ' + places.sort().reverse());