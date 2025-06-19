//TODO 📗 Module 5. Logic and Control Flow - Lesson 05.01: Module Review - Calculator Project


//TODO  📝 Step 1: Explore the Topic – Calculator Logic and Control Flow

//* 🎯 Objective:
//  Create a basic calculator that performs different operations (add, subtract, multiply, divide) based on user input. This challenge combines:
//  • if/else or switch statements
//  • Arithmetic operators
//  • Input validation

//* 🔧 Inputs to Simulate:
//  We will need to handle the following:
//  • num1: First number (e.g., 10)
//  • num2: Second number (e.g., 5)
//  • operator: A string like "add", "subtract", "multiply", "divide"

//* 🧠 Key Concepts Involved:

//? 🔹 Arithmetic Operators
//!     Operator                    Action                  Example
//      +	                        Addition                num1 + num2
//      -	                        Subtraction             num1 - num2
//→     *	                        Multiplication          num1 * num2
//→     /	                        Division                num1 / num2

//? 🔹 Control Flow Options

//  We can use:

//  • if/else if/else chains:
if (operator === "add") {
    return num1 + num2;
}

//  • Or a switch statement:

switch (operator) {
    case "add": return num1 + num2;
}

//* ⚠️ Edge Cases to Handle
//  • Division by zero (e.g., num2 === 0)
//  • Invalid operator (e.g., "power")
//  • Non-number inputs (optional but ideal for robustness)

//* 📌 Why This Matters
//  This challenge ties together:
//  • Logical branching
//  • Arithmetic logic
//  • Clean function design
//  • Defensive programming


//TODO  📝 Step 2: Real-World Examples – Where Calculator Logic Appears

//  Even though a calculator seems simple, the logic behind it is used in many real-world applications, far beyond basic math tools.

//* 💳 Example 1: E-commerce Price Calculator
//  “Apply a discount, then add tax.”

if (operation === "discountedPrice") {
    finalPrice = price - (price * discountRate);
} else if (operation === "addTax") {
    finalPrice = price + (price * taxRate);
} 

//! 🧠 This logic is used in every online checkout system.

//* 📊 Example 2: Financial Reporting Tools
//  “Add income sources, subtract expenses.”

if (operation === "netIncome") {
    return income - expenses;
}

//! 🧠 Used in accounting software, tax calculators, and budget apps.

//* 🧠 Example 3: Educational Math Games
//  “Prompt students to solve multiplication or division problems.”

switch (userAnswer,operation) {
    case "multiply":
        return num1 * num2;
    case "divide":
        return num1 / num2;
}

//! 🧠 Real-time feedback depends on clean, accurate logic.

//* ⚖️ Example 4: Fitness and Health Apps
//  “Calculate calories burned or BMI.”

if (operation === "bmi") {
    return weight / (height * height);
}

//! 🧠 Math-driven outputs for real-life impact.

//* ⚠️ Example 5: Validating Inputs and Errors
//  “Avoid dividing by 0 or handling incorrect operations.”

if (operator === "divide" && num2 === 0) {
    console.log("Cannot divide by zero.");
}

//! 🧠 Defensive checks are essential in any real-world calculator logic.


//TODO  📝 Step 3: Quiz Logic & Operators

//* 1. Which operator is used for multiplication in JavaScript?
//  A. x
//  B. *
//  C. ^
//  D. mult

//! Answer: B

//* 2. What will this return?

let num1 = 10;
let num2 = 0;

if (num2 === 0) {
    console.log("Cannot divide");
} else {
    console.log(num1 / num2);
}

//  A. 0
//  B. Infinity
//  C. Cannot divide
//  D. Syntax Error

//! Answer: C

//* 3. Which structure is best for choosing one of many operations?
//  A. while
//  B. switch
//  C. for
//  D. console.log

//! Answer: B

//* 4. What is the result of 10 / 2 * 3?
//  A. 15
//  B. 1.5
//  C. 6
//  D. 10

//! Answer: A

//* 5. What is the value of num1 % num2 used for?
//  A. Random number generation
//  B. Percentage calculations
//  C. Remainder from division
//  D. Power operation

//! Answer: C

//* True or False

//  6. You should check for zero before dividing two numbers.
//! Answer: True

//  7. switch statements allow combining multiple operators easily.
//! Answer: True

//  8. All arithmetic operators return numbers.
//! Answer: True

//  9. The expression num1 + num2 will always produce a number.
//! Answer: False

//  10. Using return in a function immediately exits that function.
//! Answer: True
