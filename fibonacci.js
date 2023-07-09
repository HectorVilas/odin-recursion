function fibs (num) {
  const sequence = [];
  for(let i = 0; sequence.length <= num; i++) 
    sequence.push(i < 2 ? i : sequence.at(-1) + sequence.at(-2));
  return sequence;
}


function fibsRec (num) {
  // if (num > 2) console.log(`${num - 1} + ${num - 2}`);
  // else console.log(num);
  if (num < 2) return num
  else return fibsRec(num - 1) + fibsRec(num - 2);
}

console.log('fibs(8): ', ...fibs(8));
console.log('fibsRec(8): ', fibsRec(8));