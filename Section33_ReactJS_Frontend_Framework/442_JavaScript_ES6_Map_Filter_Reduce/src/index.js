import emojipedia from "./emojipedia";

// console.log(emojipedia);
const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(newEmojipedia);

// var numbers = [3, 56, 2, 48, 5];

/* Map -Create a new array by doing something with each item in an array. */
// var newNumbers = [];
// function double(x) {
//   newNumbers.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNumbers); // [6, 112, 4, 96, 10]
// 이것을 map()을 사용하여 나타내면 아래와 같다.
// function double(x) {
//   return x*2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers); // [6, 112, 4, 96, 10]
// 또는 아래와 같이 간략하게 나타낼 수도 있다.
// const newNumbers = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(newNumbers); // [6, 112, 4, 96, 10]

/* Filter - Create a new array by keeping the items that return true. */
// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers); // [56, 48]
// 이것을 filter()을 사용하여 간략하게 나타내면 아래와 같다.
// const newNumbers = numbers.filter(function(num) {
//   return num > 10;
// });
// console.log(newNumbers); // [56, 48]

/* Reduce - Accumulate a value by doing something to each item in an array. */
// var newNumber = 0;
// numbers.forEach(function(currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber); // 114
// 이것을 filter()을 사용하여 간략하게 나타내면 아래와 같다.
// const newNumber = numbers.reduce(function(accumulator, currentNumber) {
//   return accumulator + currentNumber;
// }, 0);
// console.log(newNumber); // 114

/* Find - find the first item that matches from an array. */
// const newNumber = numbers.find(function(num) {
//   return num > 10;
// });
// console.log(newNumber); // 56

/* FindIndex - find the index of the first item that matches. */
// const newIndex = numbers.findIndex(function (num) {
//   return num > 10;
// });
// console.log(newIndex); // 1
