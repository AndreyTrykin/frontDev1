function getArrays(number) {
  let i = 1;
  let first = [];
  let second = [];
  while (i <= number) {
    if (i % 3 === 0) {
      first.push(i);
    }
    if (i % 5 === 0) {
      second.push(i);
    }
    i += 1;
  }

  let j = -1;
  while (number - 1 < j) {
    if (j % 3 === 0) {
      first.push(j);
    }
    if (j % 5 === 0) {
      second.push(j);
    }
    j -= 1;
  }

  return [first, second];
}

export default getArrays;
