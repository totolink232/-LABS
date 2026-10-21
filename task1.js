// Завдання 1: Демонстрація Event Loop із затримкою 1000 мс
console.log("Початок");

setTimeout(() => {
  console.log("setTimeout 1000ms");
  alert("Порядок виконання:\n1. Початок\n2. Кінець\n3. Promise resolved\n4. setTimeout 1000ms\n\nДеталі в консолі");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("Кінець");
