const methods = require('./main');

const wordArray = ["blue", "red", "yellow"]
const numArray = [1, 0, 5]




test('checks myMap method to add 3 to each number', () => {
  expect(methods.myMap(numArray, (num) => num + 3)).toStrictEqual([4, 3, 8]);
});

test('checks myMap method to add "-ish" to each word', () => {
  expect(methods.myMap(wordArray, (word) => `${word}-ish`)).toStrictEqual(["blue-ish", "red-ish", "yellow-ish"]);
});


test('checks myConcat method to concatenate both arrays into one', () => {
  expect(methods.myConcat(wordArray, numArray)).toStrictEqual(["blue", "red", "yellow", 1, 0, 5]);
});

test('checks myConcat method "[ 1, 0, 5, "blue", "red", "yellow"]"', () => {
  expect(methods.myConcat(numArray, wordArray)).toStrictEqual([1, 0, 5, "blue", "red", "yellow"]);
});


test('checks myReverse method "[ 1, 0, 5]"', () => {
  expect(methods.myReverse(numArray)).toStrictEqual([5, 0, 1]);
});


test('checks myReverse method "[ "yellow", "red", "blue" ]"', () => {
  expect(methods.myReverse(wordArray)).toStrictEqual(["yellow", "red", "blue"]);
});