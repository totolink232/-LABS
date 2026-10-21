import { sum, subtract, multiply, divide } from "./mathOperations.js";
import User from "./user.js";

// Завдання 1. Робота з модулем mathOperations.js
console.log("--- Завдання 1: Математичні операції ---");
console.log("sum(10, 5) =", sum(10, 5));
console.log("subtract(10, 5) =", subtract(10, 5));
console.log("multiply(10, 5) =", multiply(10, 5));

try {
  console.log("divide(10, 2) =", divide(10, 2));
  console.log("divide(10, 0) =", divide(10, 0));
} catch (error) {
  console.log("Помилка:", error.message);
}

// Завдання 2. Робота з модулем user.js
console.log("\n--- Завдання 2: Клас User ---");
const user = new User("Олександр", 20);
user.greet();
