// 1. Створення об'єкта user
let user = {
  name: "Олександр",
  age: 20,
  email: "oleksandr@example.com",
  hobbies: ["футбол", "програмування", "музика"]
};

// 1. Виведення у консоль усіх властивостей об'єкта
console.log("Початковий об'єкт user:", user);

// 2. Додавання нової властивості isAdmin зі значенням false
user.isAdmin = false;
console.log("Додано isAdmin:", user.isAdmin);

// 3. Зміна віку користувача
user.age = 21;
console.log("Оновлений вік:", user.age);

// 4. Видалення властивості email
delete user.email;
console.log("Після видалення email:", user);

// 5. Перебір усіх властивостей та виведення у форматі ключ: значення
console.log("Властивості об'єкта (ключ: значення):");
for (let key in user) {
  console.log(key + ": " + user[key]);
}
