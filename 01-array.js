// SOAL 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(array) {
  return [...array].reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// SOAL 2
const aray1 = [1, 3, 4, 1, 2, 8];
const aray2 = [5, 6, 7, 8, 1, 3];

function getAverage(array) {
  let average = array.reduce((total, arr) => total + arr) / array.length;
  let result = [];
  array.forEach((number) => {
    if (number > average) result.push(number);
  });
  return result.length;
}

console.log(getAverage(aray1));
console.log(getAverage(aray2));

// SOAL 3
const ar = [[10], [9, 7, 1], [2, 8]];

function searchInArray(array, number) {
  let gabungArrray = [];
  array.forEach((arr) => gabungArrray.push(...arr));

  let result;
  for (let i = 0; i < gabungArrray.length; i++) {
    if (gabungArrray[i] == number) {
      result = gabungArrray.indexOf(number);
      break;
    }
  }
  return result ? result : null;
}

console.log(searchInArray(ar, 3));
console.log(searchInArray(ar, 2));
console.log(searchInArray(ar, 4));
console.log(searchInArray(ar, 8));
