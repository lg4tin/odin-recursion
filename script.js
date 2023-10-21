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



const fibsRecursion = (num) => num >= 2 ? fibsRecursion(num - 1) + fibsRecursion(num - 2) : num;
console.log(fibsRecursion(15));