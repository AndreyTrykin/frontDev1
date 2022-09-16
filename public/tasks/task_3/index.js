function checkAnagram(anagramArray) {
  if (anagramArray.length <= 1) {
    return false;
  }

  let Arr = [];
  for (let i = 0; i < anagramArray.length; i++) {
    let char = anagramArray[i];
    let softWord = char.split("").sort().join("");
    Arr.push(softWord);
  }

  let excess = Arr.find((item) => item !== Arr[0]);
  if (excess) {
    return false;
  } else {
    return true;
  }
}
export { checkAnagram };
