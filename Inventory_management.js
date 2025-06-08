// 1. Declare an empty inventory array
const inventory = [];

// Helper function to find product index by name (lowercase)
function findProductIndex(name) {
  return inventory.findIndex(
    product => product.name === name.toLowerCase()
  );
}

// 6. Function to add product
function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity });
    console.log(`${name} added to inventory`);
  }
}

// 11. Function to remove product
function removeProduct(name, quantity) {
  const lowerName = name.toLowerCase();
  const index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  const product = inventory[index];

  if (quantity > product.quantity) {
    console.log(`Not enough ${lowerName} available, remaining pieces: ${product.quantity}`);
  } else if (quantity === product.quantity) {
    inventory.splice(index, 1);
    console.log(`${lowerName} removed from inventory`);
  } else {
    product.quantity -= quantity;
    console.log(`Remaining ${lowerName} pieces: ${product.quantity}`);
  }
}
// 16. Function to display inventory
function displayInventory() {
  if (inventory.length === 0) {
    console.log("Inventory is empty");
    return;
  }

  console.log("Current Inventory:");
  inventory.forEach(product => {
    console.log(`${product.name}: ${product.quantity}`);
  });
}