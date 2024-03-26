// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, and
//  it should print a summary of the sandwich that is being ordered. Call the function three times, using a different

import { afterEach } from "node:test";

// number of arguments each time.
function makesandwich(items: string[]) {
  console.log("\n\nMaking your sandwich with:");

  items.forEach((Element) => console.log("- " + Element));

  console.log("\nEnjoy your sandwich !");
}
makesandwich(["Bacon", "Cheese", "Lettuce"]);
makesandwich(["Ham", "Turkey"]);
makesandwich(["Peanut butter", "Jelly"]);
