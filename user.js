// Модуль користувача (експорт за замовчуванням)
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    let message = `Привіт, мене звати ${this.name}, і мені ${this.age} років!`;
    console.log(message);
    return message;
  }
}
