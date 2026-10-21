// Завдання 4: Використання async/await
async function getUserDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let user = { name: "Іван", age: 25 };
      resolve(user);
    }, 2000);
  });
}

async function main() {
  console.log("Очікування даних через async/await (2 сек)...");
  const data = await getUserDataAsync();
  console.log("Отримані дані через async/await:", data);
  alert("Користувач (async/await):\nІм'я: " + data.name + ", Вік: " + data.age + "\n\nДеталі в консолі");
}

main();
