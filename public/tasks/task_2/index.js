function encode(text, openAlph, secureAlph) {
  let str = "";
  let index = 0;
  let Index = 0;
  let char = text.toUpperCase();
  let open = openAlph.toUpperCase();
  let secure = secureAlph.toUpperCase();
  for (let i = 0; i <= text.length - 1; i += 1) {
    if (open.indexOf(char[i]) === -1) {
      str = `${str}${text[i]}`;
    } else if (char[i] === text[i]) {
      Index = open.indexOf(text[i]);
      str = `${str}${secure[Index]}`;
    } else {
      index = openAlph.indexOf(text[i]);
      str = `${str}${secureAlph[index]}`;
    }
  }

  return str;
}

export { encode };
