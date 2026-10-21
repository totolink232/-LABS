// Створення масиву з 5 товарами
let products = [
  { name: "Ноутбук", price: 32000, category: "Електроніка" },
  { name: "Смартфон", price: 20000, category: "Електроніка" },
  { name: "Книга", price: 350, category: "Література" },
  { name: "Навушники", price: 2500, category: "Електроніка" },
  { name: "Рюкзак", price: 1200, category: "Аксесуари" }
];

// 1. Виведення всього масиву у консоль
console.log("Початковий масив товарів:", products);

// 2. Додавання нового товару у масив
products.push({ name: "Клавіатура", price: 1500, category: "Електроніка" });
console.log("Після додавання товару:", products);

// 3. Видалення останнього елемента масиву
let removedProduct = products.pop();
console.log("Видалено останній елемент:", removedProduct);
console.log("Після видалення:", products);

// 4. Фільтрація товарів за певною категорією
let filteredProducts = products.filter(item => item.category === "Електроніка");
console.log("Товари з категорії 'Електроніка':", filteredProducts);

// 5. Новий масив лише з назвами товарів (map)
let productNames = products.map(item => item.name);
console.log("Назви товарів (map):", productNames);

// 6. Загальна сума всіх товарів (reduce)
let totalPrice = products.reduce((sum, item) => sum + item.price, 0);
console.log("Загальна вартість (reduce):", totalPrice);
