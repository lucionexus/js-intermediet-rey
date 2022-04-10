// SOAL 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
  // menggunakan ternery
  return arr.length === 0 ? 0 : arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// SOAL 2
const avg1 = [1, 2, 3, 4, 5];
const avg2 = [0, 3, 1, 10, 22];
function countAboveAvg(arr, avg) {
  let counter = 0;
  if (arr.length == 0) return counter;
  else {
    counter = counterAbvAvr(arr.slice(1), avg);
    return arr[0] > avg ? (counter += 1) : counter;
  }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// SOAL 3
const arr = [1, 2, 3, 4, 5];
function searchInArray( arr, number ) {
    
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

// SOAL 4
function trianglePattern( col,row ) {
    

const first = 5;
const second = 3;
const third = 2;

trianglePattern(first, first);
trianglePattern(second, second);
trianglePattern(third, third);
