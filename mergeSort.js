const array = [];

const quantity = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < quantity; i++) {
  array.push(Math.floor(Math.random() * 100));
}

function mergeSort (arr) {
  if (arr.length < 2) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2);

  return sort(mergeSort(left), mergeSort(right));
}

function sort (left, right) {
  const ordered = [];
  
  while (left.length > 0 && right.length > 0) {
    if (left.at(0) < right.at(0)) ordered.push(left.shift())
    else ordered.push(right.shift());
  };
  
  ordered.push(...left, ...right);

  return ordered;
}

console.log('unordered list:', ...array);
console.log('Ordered list: ', ...mergeSort(array));