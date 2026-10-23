// ==========================================
// CAPSTONE MINI PROJECT
// Interactive Product Inventory & Analytics Dashboard
// ==========================================

// 1. Data and Input Initialization
let inventory = [
    { name: "Laptop", price: 800, category: "Premium" },
    { name: "Mouse", price: 25, category: "Budget" }
];

console.log("--- Initializing Inventory System ---");

// Taking user input
let productName = prompt("Enter the new product name:");
let productPrice = Number(prompt("Enter the product price:"));

// Validate input
if (
    productName !== null &&
    productName.trim() !== "" &&
    Number.isFinite(productPrice) &&
    productPrice > 0
) {
    // 2. Control Flow and Conditional Evaluation
    let category;

    if (productPrice < 50) {
        category = "Budget";
    } else if (productPrice <= 200) {
        category = "Standard";
    } else {
        category = "Premium";
    }

    // Add product to inventory
    inventory.push({
        name: productName.trim(),
        price: productPrice,
        category: category
    });

    console.log(
        `[Prompt executed: User adds "${productName}" at "$${productPrice}"]`
    );
} else {
    console.log("Invalid input. Please enter a valid product name and price.");
}

// 3. Loops and Flow Control
console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function (item) {
    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${item.category}`
    );
});

// 4. Functions and Scope

// Regular function to calculate total inventory value
function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }

    return total;
}

// Arrow function to calculate discounted price
const applyDiscount = (price, discountPercent) => {
    return price - (price * discountPercent / 100);
};

// Calculate total inventory value
let totalValue = calculateTotal(inventory);

// Calculate discounted price of each product
console.log("\n--- Discounted Prices (10%) ---");

inventory.forEach(item => {
    let discountedPrice = applyDiscount(item.price, 10);

    console.log(
        `${item.name}: $${item.price} -> Discounted: $${discountedPrice.toFixed(2)}`
    );
});

// 5. Array Methods and Iteration

// Filter products under $200
let affordableItems = inventory.filter(item => item.price < 200);

// Create a formatted inventory report using map()
let report = inventory.map(item =>
    `${item.name.toUpperCase()}: $${item.price}`
);

// Display Final Analytics
console.log("\n--- Financial Analytics ---");

console.log(`Total Inventory Value: $${totalValue}`);

console.log(
    'Filtered Affordable Items (Under $200): ' +
    JSON.stringify(affordableItems.map(item => item.name))
);

console.log("Formatted Report List: " + JSON.stringify(report));

console.log("\n--- Inventory Dashboard Completed ---");

