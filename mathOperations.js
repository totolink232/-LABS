// Модуль математичних операцій
export function sum(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Ділення на нуль неможливе!");
  }
  return a / b;
}
