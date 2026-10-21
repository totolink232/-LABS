// Модуль для роботи з DOM
export function changeText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  } else {
    console.warn(`Елемент з id "${elementId}" не знайдено.`);
  }
}
