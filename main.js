import { changeText } from "./domUtils.js";
import "./app.js";

// Завдання 3. Робота з модулем domUtils.js
console.log("\n--- Завдання 3: Робота з DOM ---");
changeText("title", "Лабораторна робота №4: Робота з модулями (ES6+)");
changeText("description", "Текст успішно змінено через функцію changeText() з модуля domUtils.js");
console.log("Текст елементів #title та #description змінено в DOM.");
