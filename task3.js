// Створення масиву користувачів
let users = [
  { name: "Андрій", age: 17, email: "andriy@mail.com", hobbies: ["ігри", "спорт"] },
  { name: "Марія", age: 22, email: "maria@mail.com", hobbies: ["малювання", "книги"] },
  { name: "Іван", age: 16, email: "ivan@mail.com", hobbies: ["музика"] },
  { name: "Оксана", age: 19, email: "oksana@mail.com", hobbies: ["танці", "фотографія"] },
  { name: "Тарас", age: 25, email: "taras@mail.com", hobbies: ["подорожі", "кулінарія"] }
];

// Функція, яка приймає масив користувачів, фільтрує повнолітніх (18+) та виводить їхні імена в консоль
function printAdultUsers(usersList) {
  let adults = usersList.filter(user => user.age >= 18);

  console.log("Повнолітні користувачі (18+):");
  adults.forEach(user => {
    console.log(user.name);
  });
}

// Виклик функції
printAdultUsers(users);
