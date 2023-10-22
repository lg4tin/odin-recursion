/*eslint-disable*/

function fibsIteration(num) {
  let fibs = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      fibs.push(i);
    } else {
      fibs.push((fibs[i - 2]) + (fibs[i - 1]))
    }
  }
  return fibs;
}

console.log(fibsIteration(8));


let arr = []
const fibsRecursion = (num) => num >= 2 ? fibsRecursion(num - 1) + fibsRecursion(num - 2) : num;
console.log(fibsRecursion(8));

let array = [4,1,3,6,7,5,2,8,19,2,1,3,78,3]

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let left = array.splice(0, array.length / 2);
  let right = array;

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  const sortedArray = [...arr, ...left, ...right];
  return sortedArray;
}
 
console.log(mergeSort(array))