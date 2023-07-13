const array = [];

const quantity = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < quantity; i++) {
  array.push(Math.floor(Math.random() * 100));
}

function mergeSort (arr) {
  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice((arr.length / 2));

  if (arr.length > 2) {
    mergeSort(left);
    mergeSort(right);
  }

  return sort(left, right);
}

function sort (left, right) {
  const ordered = [];
  
  while (left.length > 0 || right.length > 0) {
    const lowerLeftIdx = left.indexOf(Math.min(...left));
    const lowerRightIdx = right.indexOf(Math.min(...right));
    let lower = left[lowerLeftIdx] < right[lowerRightIdx] || right.length === 0
      ? left.splice(lowerLeftIdx, 1)[0]
      : right.splice(lowerRightIdx, 1)[0];
    ordered.push(lower);
  };

  return ordered;
}

console.log('unordered list:', ...array);
console.log('Ordered list: ', ...mergeSort(array));