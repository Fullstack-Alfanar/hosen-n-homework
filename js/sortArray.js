let array = [10, 4, 30, 13, 9, 17, 2, 24, 11, 23, 5, 7];
function sortArray(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let x = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = x;
      i = -1;
    }
  }
  return arr;
}
console.log(sortArray(array));
