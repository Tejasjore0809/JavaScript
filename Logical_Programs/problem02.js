//Javascript program to print the sum of all the items of the array.

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let array = [1, 2, 3, 4, 5, 6, 4, 5];
console.log(`sum of all the items of the array is:`, calculateSum(array));
