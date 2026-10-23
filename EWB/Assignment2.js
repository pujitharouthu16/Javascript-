let bill = Number(prompt("Enter bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));
let tip = bill * tipPercentage / 100;
let total = bill + tip;
console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);

