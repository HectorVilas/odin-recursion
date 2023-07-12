const array = [7, 5, 9, 2, 6, 1, 3, 8, 0];

// function mergeSort (arr) {
//   const left = arr.slice(0, arr.length / 2);
//   const right = arr.slice((arr.length / 2));

//   if (arr.length > 2) {
//     console.log(arr.join(' - '));
//     console.log(left, right);
//     mergeSort(left);
//     mergeSort(right);
//   }

//   return sort(left, right);
// }

function sort (left, right) {
  console.log("lists: ", left, right);
  const ordered = [];
  
  while (left.length > 0 || right.length > 0) {
    const lowerLeftIdx = left.indexOf(Math.min(...left));
    const lowerRightIdx = right.indexOf(Math.min(...right));
    console.log("L: ", left[lowerLeftIdx], " | R: ", right[lowerRightIdx]);
    let lower = left[lowerLeftIdx] < right[lowerRightIdx] || right.length === 0
      ? left.splice(lowerLeftIdx, 1)[0]
      : right.splice(lowerRightIdx, 1)[0];
    console.log("lower: ", lower);
    ordered.push(lower);
    console.log("ordered: ", JSON.stringify(ordered));
  } ;

  return ordered;
}

// console.log(mergeSort(array));
sort([7, 5, 9, 2],[6, 1, 3, 8, 0]);