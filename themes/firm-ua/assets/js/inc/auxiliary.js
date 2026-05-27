// ==== Перевод в Lower Case с первой заглавной буквой ===========
export function sentenceCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word
    )
    .join(' ');
}