console.log("Grocery shopping list");

const shoppingList = []; // Initialize empty shopping list array

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples"); // Add "Apples" to the end of the list

function getShoppingListMsg(arr) {
    return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes"); // Add "Grapes" to the end of the list
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil"); // Add "Vegetable Oil" to the start of the list
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips"); // Add multiple items to the end
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop(); // Remove last item ("Potato Chips")
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake"); // Add "Chocolate Cake" to the start
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift(); // Remove first item ("Chocolate Cake")
shoppingList[0] = "Canola Oil"; // Replace first item with "Canola Oil"

console.log(getShoppingListMsg(shoppingList));