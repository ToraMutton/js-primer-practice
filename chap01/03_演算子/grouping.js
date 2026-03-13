function compare(x, y, z) {
  const patternX = x + (y * z);
  const patternY = (x + y) * z;
  const larger = patternX > patternY ? patternX : patternY;
  return larger;
}

console.log(compare(1, 2, 3));
console.log(compare(10, 2, 5));
