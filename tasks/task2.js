// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let result = '';

  // Проходимо по рядку з кінця до початку
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    // Якщо символ НЕ є цифрою,а нормальним тіпом, додаємо його до результату
    if (!(char >= '0' && char <= '9')) {
      result += char;
    }
  }

  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;