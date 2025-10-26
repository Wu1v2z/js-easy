// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  // голосні
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  // Створюємо новий рядок
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Перевіряємо, чи є символ голосною 
    if (vowels.includes(char.toLowerCase())) {
      result += '*';
    } else {
      result += char;
    }
  }

  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;