/*eslint-disable*/

function fibsIteration(num) {
  let fibs = [];
  let total = 0;
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

function fibsRecursive(num) {
  let fibs = [];

  if (num === 0) return fibs;
  if (num === 1 || num === 2) fibs.push(num)
  if (num >= 2) {
    return fibs.push(fibsRecursive(num - 1) + fibsRecursive(num - 2));
  }

  return fibs
}

console.log(fibsRecursive(2))