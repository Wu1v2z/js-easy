// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
  let count = 0; // Лічильник кількості входжень

  // Проходимо по всіх символах рядка
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { // Якщо символ співпадає
      count++; // Збільшуємо лічильник
    }
  }

  return count; // Повертаємо кількість входжень(пікантно:))
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a'));       // Виведе: 3

module.exports = countOccurrences;