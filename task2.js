// Завдання 2: Робота з callback-функціями
function getUserData(callback) {
  setTimeout(() => {
    let user = { name: "Іван", age: 25 };
    callback(user);
  }, 2000);
}

console.log("Очікування даних через callback (2 сек)...");
getUserData((data) => {
  console.log("Отримані дані через callback:", data);
  alert("Користувач (callback):\nІм'я: " + data.name + ", Вік: " + data.age + "\n\nДеталі в консолі");
});
