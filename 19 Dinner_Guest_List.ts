
let Guest_List :string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];

// for(let i=0; i<Guest_List.length; i++){

  // console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;
 
// for(let i=0; i<Guest_List.length; i++){

  // console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }
 
console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('God News! We find Big Table So we are inviting 3 more guests.')
// array m 3 guest ko add kia h:
Guest_List.unshift('Sir Zia Khan') ;
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilwal Bhutto');
// yaha pr meny 6 guest ky array ko print karwaya h:
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log (`\nSorry we can not arrange big table, Only Two people will be invited`);
// yaha par meny guest remove kiye hein:
while(Guest_List.length > 2){
 let remove_Guest = Guest_List.pop();
//  console.log(`Sorry Mr. ${remove_Guest}, You are not invited for Dinner.`);

}
// Humary 2 invited guest reh gaye:
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou re still invited.\n\nThankYou!\n\n')
// }

Guest_List.splice(0, 2);
console.log(Guest_List);

// Exercise 19

// Print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of Guest are: ${Guest_List.length}`);