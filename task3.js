// Завдання 3: Використання Promises
function getUserDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let user = { name: "Іван", age: 25 };
      resolve(user);
    }, 2000);
  });
}

console.log("Очікування даних через Promise (2 сек)...");
getUserDataPromise().then((data) => {
  console.log("Отримані дані через Promise (.then):", data);
  alert("Користувач (Promise):\nІм'я: " + data.name + ", Вік: " + data.age + "\n\nДеталі в консолі");
});
